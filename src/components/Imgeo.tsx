import React, { useEffect, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import moment from "moment";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
// @ts-ignore
import jsPDF from "jspdf";
import { format } from "date-fns";
import toast from "react-hot-toast";
import Loader from "./Loader/Loader";
import { setTheme } from "../redux/apis/apisSlice";
var from: any = 0;
var to: any = 0;
const Imgeo: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [indexNumber, setIndexNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [nameChange, setNameChange] = useState("");
  const [date, setDate] = useState("");
  const [initialTime, setInitialTime] = useState<any>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  let [selectedTime, setSelectedTime] = useState<any>();
  let [ew, setEw] = useState<any>("E");

  let [hours, setHours] = useState<any>(0);
  let [minutes, setMinutes] = useState<any>(0);
  let [fromMin, setFromMin] = useState<any>(0);
  let [toMin, setToMin] = useState<any>(0);
  const [ns, setNs] = useState<any>("N");
  const [fontSize, setFontSize] = useState<any>("30");
  const handleFontSizeChange = (e: any) => {
    setFontSize(Number(e.target.value)); // Convert input value to a number and update the state
  };
  useEffect(() => {
    // Set the current time when the component mounts
    setSelectedDate(new Date());
  }, []);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log(format(selectedDate, "dd MMM yyyy"));
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleTextChange = (event: any) => {
    setNameChange(event.target.value);
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
    const [hours, minutes] = selectedTime.split(":");
    setMinutes(minutes);
    setHours(hours);
    console.log("Hours:", hours); // Outputs: Hours: 14
    console.log("Minutes:", minutes);
    console.log(selectedTime, "selectedTime");
  };

  const handleImageUploads = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: FileList = e.target.files;
      const urls: string[] = [];

      Array.from(files).forEach((file: File) => {
        urls.push(URL.createObjectURL(file));
      });

      setImages(urls);
      setIndexNumber(0); // Reset indexNumber to display the first image
    }
  };
  const handleLongitudeChange = (event: any) => {
    setLongitude(event.target.value);
  };

  const handleLatitudeChange = (event: any) => {
    setLatitude(event.target.value);
  };
  const moveImage = (fromIndex: number, toIndex: number) => {
    const updatedImages = [...images];
    const movedImage = updatedImages.splice(fromIndex, 1)[0];
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
    setIndexNumber(toIndex);
    console.log(toIndex);
  };
  const handleSelectChangeLongitute = (event: any) => {
    setEw(event.target.value);
    console.log(event.target.value, ew);
  };
  const handleSelectChangeLatitude = (event: any) => {
    setNs(event.target.value);
    console.log(ns);
  };
  const handleDownload = () => {
    if (images.length === 0) {
      console.log("No images uploaded");
      return;
    }
    setLoading(true);
    const zip = new JSZip();
    let currentTime = moment(minutes);
    let currentMinutes: any = minutes;
    let incrementCounter = 0;
    const diff = Number(toMin - fromMin);
    var increment = Number(minutes);
    var latitudeLongitude: any = 123;
    var seconds: any = 9;

    console.log(diff, increment, "diff");

    // Track the number of images processed successfully
    let imagesProcessed = 0;

    images.forEach((imageSrc, index) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageSrc;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx: any = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        ctx.fillStyle = "white";
        ctx.font = `${fontSize}px Arial`;
        ctx.textAlign = "right";

        const margin = 20;

        currentTime.add(10, "minutes");
        const timeString = currentTime.format("mm");

        const textX = canvas.width - margin;
        const textY = canvas.height - margin;
        latitudeLongitude = 10 * (index + 1);

        console.log(increment, "123");

        ctx.fillText(
          `${format(
            selectedDate,
            "dd MMM yyyy"
          )}  ${hours}:${increment}:${seconds}`,
          textX,
          textY - 150
        );
        ctx.fillText(
          ` ${longitude}.00000${latitudeLongitude}${ew}  ${latitude}.00000${latitudeLongitude}${ns}`,
          textX,
          textY - 120
        );

        ctx.fillText(` ${email}`, textX, textY - 90);
        ctx.fillText(`${nameChange}`, textX, textY - 60);
        if (increment >= 60) {
          incrementCounter++;
          hours++;
          increment = 0;
        } else {
          increment += diff;
        }
        if (seconds >= 60) {
          seconds = 0;
        } else {
          seconds += index + 5;
        }
        canvas.toBlob((blob: any) => {
          // Convert to PNG
          canvas.toBlob((pngBlob: any) => {
            zip.file(`modified_image_${index}.png`, pngBlob); // Save as PNG
            imagesProcessed++;

            // Check if all images have been processed
            if (imagesProcessed === images.length) {
              // Generate ZIP file once all images are processed
              zip.generateAsync({ type: "blob" }).then((content) => {
                saveAs(content, "images.zip");
                setLoading(false);
                setImages([]);
              });
            }
          }, "image/png");
        }, "image/jpeg"); // Convert to JPEG initially
      };

      img.onerror = () => {
        console.error("Error loading image.");
        imagesProcessed++;

        // Check if all images have been processed
        if (imagesProcessed === images.length) {
          // Generate ZIP file once all images are processed
          zip.generateAsync({ type: "blob" }).then((content) => {
            saveAs(content, "images.zip");
          });
        }
      };
    });
  };
  const handleDownloadPdf = () => {
    const pdf = new jsPDF();
    let currentHours = parseInt(hours); // Parse hours as an integer
    let currentMinutes = parseInt(minutes); // Parse minutes as an integer
    let seconds = 0; // Initialize seconds to 0

    // Initialize incrementCounter and other variables
    let incrementCounter = 0;
    const diff = parseInt(toMin) - parseInt(fromMin);
    let increment = parseInt(minutes);
    let latitudeLongitude = 123;

    images.forEach((imageSrc, index) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageSrc;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (ctx) {
          // Check if ctx is not null
          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 9, 25);

          ctx.fillStyle = "white";
          ctx.font = `${fontSize}px Arial`;

          const margin = 10;
          const textX = canvas.width - margin;
          const textY = canvas.height - margin;

          latitudeLongitude = 10 * (index + 1);

          // Update time only if it's not the first image

          if (increment >= 60) {
            incrementCounter++;
            currentHours++;
            increment = 0;
          } else {
            increment += diff;
            console.log(increment, "increment");
          }
          if (seconds >= 60) {
            seconds = 0;
          } else {
            seconds += index + 5;
          }

          ctx.fillText(
            `${format(
              selectedDate,
              "dd MMM yyyy"
            )}  ${currentHours}:${increment}:${seconds}`,
            textX -
              ctx.measureText(
                `${format(
                  selectedDate,
                  "dd MMM yyyy"
                )}  ${currentHours}:${increment}:${seconds}`
              ).width,
            textY - 150
          );
          ctx.fillText(
            ` ${longitude}.00000${latitudeLongitude}${ew}  ${latitude}.00000${latitudeLongitude}${ns}`,
            textX -
              ctx.measureText(
                ` ${longitude}.00000${latitudeLongitude}${ew}  ${latitude}.00000${latitudeLongitude}${ns}`
              ).width,
            textY - 120
          );
          ctx.fillText(
            ` ${email}`,
            textX - ctx.measureText(` ${email}`).width,
            textY - 90
          );
          ctx.fillText(
            `${nameChange}`,
            textX - ctx.measureText(`${nameChange}`).width,
            textY - 60
          );

          pdf.addImage(
            canvas.toDataURL("image/jpeg"),
            "JPEG",
            10,
            10,
            180,
            120
          );

          if (index < images.length - 1) {
            pdf.addPage();
          } else {
            pdf.save("images.pdf");
            setTheme([]);
          }
        } else {
          console.error("2D context is null.");
        }
      };

      img.onerror = () => {
        console.error("Error loading image.");
      };
    });
  };

  console.log(toMin, fromMin, "minutes");
  return (
    <div className="form-container mt-3 driver-details">
      {loading && <Loader />}
      <Col xl={12} className="px-custom">
        <Row className="mt-2 driver-details px-1 row-flex">
          <Col xl={12}>
            <Row className="mt-2 driver-details px-1 row-flex">
              <Col xl={12} className="px-0">
                <div className="d-box h-100 rider-listing ">
                  <div className="col-12 pt-4 individual-inventory-header">
                    <div className="individual-inventory-images text-dark font-weight-bold">
                      <h2 className="box-title">Images</h2>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="">
                        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                          <div
                            id="carouselExampleIndicators"
                            className="carousel pt-2 img-property"
                          >
                            <ol
                              className="carousel-indicators"
                              style={{ overflow: "overlay" }}
                            >
                              {images.map((key, index) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setIndexNumber(index);
                                  }}
                                  data-target="#carouselExampleIndicators"
                                  data-slide-to={index}
                                  className={
                                    index === indexNumber
                                      ? "active w-100"
                                      : "w-100"
                                  }
                                ></li>
                              ))}
                            </ol>
                            <div
                              className="carousel-inner"
                              style={{ marginBottom: "70px" }}
                            >
                              {images.map((item, index) => (
                                <div
                                  key={index}
                                  className={`carousel-item ${
                                    index === indexNumber ? "active" : ""
                                  }`}
                                >
                                  <div className="">
                                    <img
                                      onClick={() => {
                                        setIndexNumber(index);
                                      }}
                                      style={{
                                        borderRadius: "10px",
                                        maxHeight: "360px",
                                      }}
                                      className="img-fluid"
                                      src={item}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <a
                              className="carousel-control-prev"
                              onClick={() =>
                                setIndexNumber(
                                  (indexNumber + images.length - 1) %
                                    images.length
                                )
                              }
                            >
                              <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a
                              className="carousel-control-next"
                              onClick={() =>
                                setIndexNumber(
                                  (indexNumber + 1) % images.length
                                )
                              }
                            >
                              <span className="carousel-control-next-icon"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 d-flex justify-content-center mt-4">
                      <div className="col-xl-8 d-flex align-items-center justify-content-center">
                        <label htmlFor="imageInput" className="btn btn-primary">
                          Upload Image
                        </label>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          multiple
                          onChange={handleImageUploads}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* New section for selected images */}
                  <div className="col-12 mt-4 text-center">
                    <div className="selected-images">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Selected ${index}`}
                          className="selected-image"
                          onClick={() => setIndexNumber(index)}
                          onDragStart={(e) => {
                            e.dataTransfer.setData("index", index.toString());
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                          }}
                          onDrop={(e) => {
                            const fromIndex = parseInt(
                              e.dataTransfer.getData("index")
                            );
                            moveImage(fromIndex, index);
                          }}
                          draggable
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={12}>
            <Row className="mt-2 driver-details px-1 row-flex">
              <div className="d-box"></div>
            </Row>
          </Col>
          <h2>Pick Date and Time</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="dateInput">Date:</label>
                <DatePicker
                  id="dateInput"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat={"dd MMM yyyy"}
                  className="form-control"
                />
              </div>
            </div>
            <div className="d-flex col-md-6">
              <div className="col-6 form-group">
                <label htmlFor="fromMinsInput">Hours:</label>
                <input
                  type="number"
                  id="fromMinsInput"
                  value={hours}
                  onChange={(event: any) => {
                    setHours(event.target.value);
                  }}
                  placeholder="enter hours"
                  className="form-control"
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="toMinsInput">Minutes:</label>
                <input
                  type="number"
                  id="toMinsInput"
                  className="form-control"
                  value={minutes}
                  onChange={(event: any) => {
                    setMinutes(event.target.value);
                  }}
                  placeholder="enter minutes"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="emailInput">Email:</label>
                <input
                  placeholder="Enter the email"
                  type="email"
                  id="emailInput"
                  className="form-control"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="longitudeInput">Longitude:</label>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Enter the Longitude"
                    id="longitudeInput"
                    className="form-control"
                    value={longitude}
                    onChange={handleLongitudeChange}
                  />
                  <select
                    className="form-control"
                    value={ns}
                    onChange={handleSelectChangeLatitude}
                  >
                    <option value="N">N</option>
                    <option value="S">S</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="latitudeInput">Latitude:</label>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Enter the Latitude"
                    id="latitudeInput"
                    className="form-control"
                    value={latitude}
                    onChange={handleLatitudeChange}
                  />
                  <select
                    className="form-control"
                    value={ew}
                    onChange={handleSelectChangeLongitute}
                  >
                    <option value="E">E</option>
                    <option value="W">W</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex col-md-6">
              <div className="col-6 form-group">
                <label htmlFor="fromMinsInput">From Mins:</label>
                <input
                  value={fromMin}
                  type="number"
                  id="fromMinsInput"
                  className="form-control"
                  onChange={(event: any) => {
                    setFromMin(event.target.value);
                    // if (fromMin <= 3) {
                    //   from = fromMin;
                    // } else {
                    //   toast.error("enter valid amount");
                    // }
                  }}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="toMinsInput">To Mins:</label>
                <input
                  value={toMin}
                  type="number"
                  id="toMinsInput"
                  className="form-control"
                  onChange={(event: any) => {
                    setToMin(event.target.value);
                    // if (toMin >= 3) {
                    //   to = toMin;
                    // } else {
                    //   toast.error("enter valid amount");
                    // }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fontSizeInput">Font Size:</label>
                <input
                  type="number"
                  id="fontSizeInput"
                  className="form-control"
                  value={fontSize}
                  onChange={(event: any) => {
                    setFontSize(event?.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="picNameInput">Enter the pic name:</label>
                <input
                  placeholder="Enter the pic name"
                  type="text"
                  id="picNameInput"
                  className="form-control"
                  value={nameChange}
                  onChange={handleTextChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="cornerSelect">Select Corner:</label>
                <select id="cornerSelect" className="form-control">
                  <option value="top">Top</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  <option value="bottom">Bottom</option>
                </select>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center form-group">
              <div>
                <button
                  onClick={() => handleDownload()}
                  className="btn btn-primary btn-block mr-2"
                >
                  Download Images
                </button>
                <button
                  onClick={() => handleDownloadPdf()}
                  className="btn btn-primary btn-block ms-2"
                >
                  Download Pdf
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default Imgeo;

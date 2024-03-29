import React, { useState } from "react";
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

const ManageRoles: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [longitude, setLongitude] = useState("");
  const [fontSize, setFontSize] = useState(0);
  const [latitude, setLatitude] = useState("");
  const [nameChange, setNameChange] = useState("");
  const [date, setDate] = useState("");
  const [initialTime, setInitialTime] = useState<any>("");
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const handleFontSizeChange = (e: any) => {
    setFontSize(Number(e.target.value)); // Convert input value to a number and update the state
  };

  const handleDateChange = (date: Date) => {
    setSelectedDateTime((prevDateTime) => {
      const newDateTime = new Date(date);
      newDateTime.setHours(prevDateTime.getHours());
      newDateTime.setMinutes(prevDateTime.getMinutes());
      return newDateTime;
    });
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleTextChange = (event: any) => {
    setNameChange(event.target.value);
  };

  const handleTimeChange = (time: string | null) => {
    if (time !== null) {
      setSelectedDateTime((prevDateTime) => {
        const newDateTime = new Date(prevDateTime);
        const [hours, minutes] = time.split(":").map(Number);
        newDateTime.setHours(hours);
        newDateTime.setMinutes(minutes);
        return newDateTime;
      });
    }
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
  const handleDownload = () => {
    const zip = new JSZip();
    // @ts-ignore
    let currentTime = moment(initialTime); // Initialize currentTime with the initial time entered by the user

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
        ctx.font = "40px Arial";
        ctx.textAlign = "right"; // Align text to the right

        // Set margin from the bottom and right edges
        const margin = 20;

        // Increment time for each image by 10 minutes
        currentTime.add(10, "minutes");
        const timeString = currentTime.format("HH:mm");

        // Calculate starting point for text
        const textX = canvas.width - margin;
        const textY = canvas.height - margin;

        // Print text on the bottom right
        ctx.fillText(`Date: ${date}`, textX, textY - 150);
        ctx.fillText(`Time: ${timeString}`, textX, textY - 120);
        ctx.fillText(`Email: ${email}`, textX, textY - 90);
        ctx.fillText(`Longitude: ${longitude}`, textX, textY - 60);
        ctx.fillText(`Latitude: ${latitude}`, textX, textY - 30);

        canvas.toBlob((blob: any) => {
          zip.file(`modified_image_${index}.jpg`, blob);
          if (index === images.length - 1) {
            zip.generateAsync({ type: "blob" }).then((content: any) => {
              saveAs(content, "images.zip");
            });
          }
        }, "image/jpeg");
      };

      img.onerror = () => {
        console.error("Error loading image.");
      };
    });
  };
  const handleDownloadPdf = () => {
    const pdf = new jsPDF(); // Initialize a new PDF document

    let currentTime = moment(initialTime); // Initialize currentTime with the initial time entered by the user

    images.forEach((imageSrc, index) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageSrc;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx: any = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 10, 20);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";

        // Increment time for each image by 10 minutes
        currentTime.add(10, "minutes");
        const timeString = currentTime.format("HH:mm");

        ctx.fillText(`Date: ${date}`, 10, 30);
        ctx.fillText(`Time: ${timeString}`, 10, 60);
        ctx.fillText(`Email: ${email}`, 10, 90);
        ctx.fillText(`Longitude: ${longitude}`, 10, 120);
        ctx.fillText(`Latitude: ${latitude}`, 10, 150);

        // Add the canvas image to the PDF document
        pdf.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 10, 10, 180, 120);

        if (index < images.length - 1) {
          pdf.addPage(); // Add a new page for the next image
        } else {
          pdf.save("images.pdf"); // Save the PDF document
        }
      };

      img.onerror = () => {
        console.error("Error loading image.");
      };
    });
  };
  return (
    <div className="form-container mt-3 driver-details">
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
                  selected={selectedDateTime}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="timeInput">Time:</label>
                <TimePicker
                  id="timeInput"
                  value={moment(selectedDateTime).format("HH:mm")}
                  onChange={handleTimeChange}
                  disableClock={true}
                  className="form-control"
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
                <input
                  type="text"
                  placeholder="Enter the Longitude"
                  id="longitudeInput"
                  className="form-control"
                  value={longitude}
                  onChange={handleLongitudeChange}
                />
                <select className="form-control">
                  <option value="N">N</option>
                  <option value="S">S</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="latitudeInput">Latitude:</label>
                <input
                  type="text"
                  placeholder="Enter the Latitude"
                  id="latitudeInput"
                  className="form-control"
                  value={latitude}
                  onChange={handleLatitudeChange}
                />
                <select className="form-control">
                  <option value="E">E</option>
                  <option value="W">W</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fromMinsInput">From Mins:</label>
                <input
                  type="number"
                  id="fromMinsInput"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="toMinsInput">To Mins:</label>
                <input
                  type="number"
                  id="toMinsInput"
                  className="form-control"
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
                  onChange={handleFontSizeChange}
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
              <div className="form-group">
                <button
                  onClick={() => handleDownload()}
                  className="btn btn-primary btn-block"
                >
                  Process Images
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default ManageRoles;

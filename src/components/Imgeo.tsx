import React, { useEffect, useState } from "react";
import { Col, Dropdown, Modal, ModalBody, Row } from "react-bootstrap";
import heic2any from "heic2any";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
// @ts-ignore
import jsPDF from "jspdf";
import { format as formatDate } from "date-fns";
import toast from "react-hot-toast";
import Loader from "./Loader/Loader";
import { FileUploader } from "react-drag-drop-files";
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

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  let [selectedTime, setSelectedTime] = useState<any>();
  let [ew, setEw] = useState<any>("E");
  const [open, setOpen] = useState(false);

  let [hours, setHours] = useState<any>(0);
  let [minutes, setMinutes] = useState<any>(0);
  let [fromMin, setFromMin] = useState<any>(0);
  let [toMin, setToMin] = useState<any>(0);
  const [ns, setNs] = useState<any>("N");
  const [fontSize, setFontSize] = useState<any>("30");
  const [file, setFile] = useState<any>();
  const handleFontSizeChange = (e: any) => {
    setFontSize(Number(e.target.value)); // Convert input value to a number and update the state
  };
  useEffect(() => {
    // Set the current time when the component mounts
    setSelectedDate(new Date());
  }, []);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
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
  const fileTypes = ["JPEG", "PNG", "GIF", "JPG", "HEIC"];

  const handleChange = async (fileInput: any) => {
    console.log(fileInput, "file");
    if (fileInput) {
      const files: FileList = fileInput;
      const newUrls: string[] = [];

      for (const file of Array.from(files)) {
        if (file.type === "image/heic") {
          try {
            // Convert HEIC to JPEG
            const conversionResult: any = await heic2any({
              blob: file,
              toType: "image/jpeg", // or "image/png"
              quality: 0.8, // Quality of the output JPEG
            });

            // Create a URL for the converted image and push it to newUrls
            newUrls.push(URL.createObjectURL(conversionResult));
          } catch (error) {
            console.error("Error converting HEIC to JPEG:", error);
            setLoading(false);
          }
        } else {
          // For non-HEIC images, create a URL as before
          newUrls.push(URL.createObjectURL(file));
          setLoading(false);
        }
      }

      // Concatenate the new image URLs with the existing ones
      const updatedUrls = [...images, ...newUrls];
      setFile(fileInput); // Assuming this should be fileInput, not file
      setImages(updatedUrls);
      setIndexNumber(0); // Reset indexNumber to display the first image
    }
  };

  const handleImageUploads = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e, "newfile");

    if (e.target.files) {
      const files: FileList = e.target.files;
      const newUrls: string[] = [];

      Array.from(files).forEach((file: File) => {
        newUrls.push(URL.createObjectURL(file));
      });

      // Concatenate the new image URLs with the existing ones
      const updatedUrls = [...images, ...newUrls];

      setImages(updatedUrls);
      setIndexNumber(0); // Reset indexNumber to display the first image
    }
  };

  const handleLongitudeChange = (event: any) => {
    const { value } = event.target;

    const regEx = /^-?\d{0,2}(\.\d{0,15})?$/;

    if (value === "" || value === "-" || regEx.test(value)) {
      let isValidRange = true;

      if (value !== "-" && value !== "") {
        const numericValue = parseFloat(value);

        isValidRange =
          numericValue >= -99.999999999999999 &&
          numericValue <= 99.999999999999999;
      }

      if (isValidRange) {
        setLongitude(value);
      }
    }
  };

  const handleLatitudeChange = (event: any) => {
    const { value } = event.target;
    // Allow input that starts with a negative sign, up to two digits before the decimal,
    // and up to 15 digits after the decimal
    const regEx = /^-?\d{0,2}(\.\d{0,15})?$/;

    // Check if the input is either empty, a single minus for negative values, or matches the regex
    if (value === "" || value === "-" || regEx.test(value)) {
      let isValidRange = true;

      // If it's not just a "-", check the range
      if (value !== "-" && value !== "") {
        const numericValue = parseFloat(value);
        // Adjust the range check for negative values if necessary
        isValidRange =
          numericValue >= -99.999999999999999 &&
          numericValue <= 99.999999999999999;
      }

      // If in range, update the state
      if (isValidRange) {
        setLatitude(value);
      }
    }
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
      toast.error("No images uploaded");
      return;
    }
    setLoading(true);
    let currentHours = parseInt(hours); // Parse hours as an integer
    let currentMinutes = parseInt(minutes); // Parse minutes as an integer
    let seconds = 0; // Initialize seconds to 0

    // Initialize incrementCounter and other variables
    let incrementCounter = 0;
    const diff = parseInt(toMin) - parseInt(fromMin);
    let increment = parseInt(minutes);
    let latitudeLongitude = 123;
    const format = window.prompt(
      "Enter the format to save images (jpg, png, zip,jpeg,heic):"
    );

    if (
      !format ||
      !format ||
      (format !== "jpg" &&
        format !== "png" &&
        format !== "zip" &&
        format !== "heic")
    ) {
      toast.error("Invalid format selected.");
      setLoading(false);
      return;
    }

    setLoading(true);
    let imagesProcessed = 0;
    const zip = format === "zip" ? new JSZip() : null;

    images.forEach((imageSrc, index) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageSrc;

      const diff = parseInt(toMin) - parseInt(fromMin);
      const randomIncrement =
        Math.floor(Math.random() * (diff + 1)) + parseInt(fromMin);

      increment += randomIncrement;
      if (increment >= 60) {
        incrementCounter++;

        hours++;
        if (hours > 24) {
          hours = 0;
        }

        increment = 0;
      }
      if (seconds >= 60) {
        seconds = 0;
      } else {
        seconds += index + 5;
      }

      (function (currentIncrement, currentSeconds, hours) {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (increment >= 60) {
            incrementCounter++;
            hours++;
            if (hours > 24) {
              setHours(0);
            }
            increment = 0;
          }

          if (!ctx) {
            console.error("Failed to get canvas context");
            return; // Exit if ctx is null
          }

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 9, 25);

          ctx.fillStyle = "white";
          ctx.font = `32px Arial`;

          latitudeLongitude = 10 * (index + 1);
          function drawText(
            ctx: CanvasRenderingContext2D,
            text: string,
            x: number,
            y: number,
            maxWidth: number
          ) {
            let fontSize = 30; // Start with a default font size
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;

            // Reduce the font size until the text fits the canvas width or reaches a minimum size
            while (ctx.measureText(text).width > maxWidth && fontSize > 20) {
              fontSize--;
              ctx.font = `${fontSize}px Arial`;
            }

            // Draw text with a stroke to ensure visibility on varied backgrounds
            ctx.strokeText(text, x, y);
            ctx.fillText(text, x, y);
          }

          const maxTextWidth = img.width - 20; // For example, 20 pixels from both sides

          // Calculate positions for your texts; adjust basedb on your requirements
          const textYDate = img.height - 90; // Position for date
          const textYLongitude = img.height - 60; // Position for longitude
          const textYEmail = img.height - 30; // Position for email
          const textYName = img.height - 10; // Position for name

          const dateString = `${formatDate(
            selectedDate,
            "dd MMM yyyy"
          )} ${hours}:${currentIncrement}:${currentSeconds}`;

          const longitudeString = `${latitude}${latitudeLongitude}${ns} ${longitude}${latitudeLongitude}${ew} `;
          const emailString = `${email}`;
          const nameString = `${nameChange}`;

          // Draw the texts onto the canvas
          drawText(ctx, dateString, 10, textYDate, maxTextWidth); // x-position is 10 for left alignment
          drawText(ctx, longitudeString, 10, textYLongitude, maxTextWidth);
          drawText(ctx, emailString, 10, textYEmail, maxTextWidth);
          drawText(ctx, nameString, 10, textYName, maxTextWidth);

          const handleBlob = (blob: any) => {
            if (blob && format === "zip" && zip) {
              zip.file(`modified_image_${index}.png`, blob);
              imagesProcessed++;
              if (imagesProcessed === images.length) {
                zip.generateAsync({ type: "blob" }).then((content) => {
                  saveAs(content, "images.zip");
                  setLoading(false);
                  toast.success("All images have been saved as ZIP.");
                });
              }
            } else if (blob) {
              saveAs(blob, `modified_image_${index}.${format}`);
              imagesProcessed++;

              if (imagesProcessed === images.length) {
                setLoading(false);

                toast.success("All images have been saved individually.");
              }
            }
          };

          if (format === "zip" || format === "png") {
            canvas.toBlob(handleBlob, "image/png");
          } else if (format === "jpg" || format === "heic") {
            canvas.toBlob(handleBlob, "image/jpeg");
          }
        };
      })(increment, seconds, hours);

      img.onerror = () => {
        console.error("Error loading image.");
        imagesProcessed++;
        if (imagesProcessed === images.length) {
          setLoading(false);
          toast.error("An error occurred with some images.");
        }
      };
    });
  };

  const handleDownloadPdf = () => {
    setLoading(true); // Set loading state to true while processing

    const pdf = new jsPDF();
    let currentHours = parseInt(hours); // Parse hours as an integer
    let currentMinutes = parseInt(minutes); // Parse minutes as an integer
    let seconds = 0; // Initialize seconds to 0

    // Initialize incrementCounter and other variables
    let incrementCounter = 0;
    const diff = parseInt(toMin) - parseInt(fromMin);
    let increment = parseInt(minutes);
    let latitudeLongitude = 123;

    // Define a function to handle loading and processing of each image
    const loadImage = (index: any) => {
      if (index < images.length) {
        const imageSrc = images[index];
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageSrc;
        increment += diff;
        if (increment >= 60) {
          incrementCounter++;
          hours++;
          if (hours > 24) {
            hours = 0;
          }
          increment = 0;
        }
        if (seconds >= 60) {
          seconds = 0;
        } else {
          seconds += index + 5;
        }
        console.log(increment, "increment");
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (increment >= 60) {
            incrementCounter++;
            hours++;
            if (hours > 24) {
              hours = 0;
            }
            increment = 0;
          }
          if (seconds >= 60) {
            seconds = 0;
          } else {
            seconds += index + 5;
          }
          canvas.width = img.width;
          canvas.height = img.height;
          if (!ctx) {
            return;
          }
          ctx.drawImage(img, 9, 25);

          ctx.fillStyle = "white";
          ctx.font = `30px Arial`;

          latitudeLongitude = 10 * (index + 1);
          function drawText(
            ctx: CanvasRenderingContext2D,
            text: string,
            x: number,
            y: number,
            maxWidth: number
          ) {
            let fontSize = 30; // Start with a default font size
            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;

            // Reduce the font size until the text fits the canvas width or reaches a minimum size
            while (ctx.measureText(text).width > maxWidth && fontSize > 10) {
              fontSize--;
              ctx.font = `${fontSize}px Arial`;
            }

            // Draw text with a stroke to ensure visibility on varied backgrounds
            ctx.strokeText(text, x, y);
            ctx.fillText(text, x, y);
          }

          // Calculate maximum text width based on image dimensions
          const maxTextWidth = img.width - 20; // For example, 20 pixels from both sides

          // Calculate positions for your texts; adjust based on your requirements
          const textYDate = img.height - 90; // Position for date
          const textYLongitude = img.height - 60; // Position for longitude
          const textYEmail = img.height - 30; // Position for email
          const textYName = img.height - 10; // Position for name

          // Formatting the date using date-fns for example
          const dateString = `${formatDate(
            selectedDate,
            "dd MMM yyyy"
          )} ${hours}:${increment}:${seconds}`;
          const longitudeString = ` ${latitude}${latitudeLongitude}${ns} ${longitude}${latitudeLongitude}${ew} `;
          const emailString = `${email}`;
          const nameString = `${nameChange}`;

          // Draw the texts onto the canvas
          drawText(ctx, dateString, 10, textYDate, maxTextWidth); // x-position is 10 for left alignment
          drawText(ctx, longitudeString, 10, textYLongitude, maxTextWidth);
          drawText(ctx, emailString, 10, textYEmail, maxTextWidth);
          drawText(ctx, nameString, 10, textYName, maxTextWidth);

          // Convert canvas to base64 image data
          const imgData = canvas.toDataURL("image/png");

          // Add image to PDF with fixed dimensions
          const pageWidth = 210; // in mm
          const pageHeight = 297; // in mm

          // Assuming image dimensions are known (width and height in mm)
          const imageWidth = 150; // in mm
          const imageHeight = 130; // in mm

          // Calculate the coordinates to center the image on the page
          const xCoordinate = (pageWidth - imageWidth) / 2; // Center horizontally
          const yCoordinate = (pageHeight - imageHeight) / 2;

          // Add a new page only for subsequent images
          if (index > 0) {
            console.log("Adding new page.");
            pdf.addPage();
          }

          pdf.addImage(
            imgData,
            "PNG",
            xCoordinate,
            yCoordinate,
            imageWidth,
            imageHeight
          ); // Adjust width and height as needed

          // Load the next image recursively
          loadImage(index + 1);
        };
        img.onerror = () => {
          console.error("Error loading image.");
          // Load the next image even if there's an error
          loadImage(index + 1);
        };
      } else {
        // If all images are processed, save the PDF and set loading to false
        pdf.save("downloaded_images.pdf");
        setLoading(false); // Set loading state to false after downloading
      }
    };

    // Start loading the first image
    loadImage(0);
  };

  const handleHours = (event: any) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (numericValue > 23 || numericValue < 0 || isNaN(numericValue)) {
      setHours("");
    } else {
      setHours(inputValue);
    }
  };
  const handleMinutes = (e: any) => {
    let value = e.target.value;

    // Check if the value contains only digits and has length <= 2
    if (/^\d*$/.test(value) && value.length <= 2) {
      // Ensure the value is within the range [0, 59]
      value = Math.min(parseInt(value, 10), 59);
      setMinutes(value.toString());
    }
  };

  const handleFromMinutes = (e: any) => {
    let value = e.target.value;
    // Check if the value contains only digits and has length <= 2
    if (/^\d*$/.test(value) && value.length <= 2) {
      value = Math.min(parseInt(value, 10), 59);
      setFromMin(value.toString());
    }
  };
  const handleToMinutes = (e: any) => {
    let value = e.target.value;
    // Check if the value contains only digits and has length <= 2
    if (/^\d*$/.test(value) && value.length <= 2) {
      value = Math.min(parseInt(value, 10), 59);
      setToMin(value.toString());
    }
  };

  const removeImage = (index: any) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
  };

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
                      <h2 className="box-title" style={{ color: "white" }}>
                        Images
                      </h2>
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
                    <div className="col-xl-12 d-flex justify-content-center mt-4"></div>
                    <div className="col-xl-12 d-flex justify-content-center mt-4">
                      <div className="drag">
                        <FileUploader
                          multiple={true}
                          handleChange={handleChange}
                          name="file"
                          types={fileTypes}
                        />
                        {/* <p style={{ color: "white" }}>
                          {file
                            ? `File name: ${file[0].name}`
                            : "no files uploaded yet"}
                        </p> */}
                      </div>
                    </div>
                  </div>
                  {/* New section for selected images */}

                  <button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="btn btn-theme btn-block"
                  >
                    selected images
                  </button>
                  <Modal size="lg" show={open} onHide={() => setOpen(!open)}>
                    <ModalBody>
                      <div className="col-12 mt-4 text-center">
                        <div className="selected-images">
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className="selected-image-container"
                            >
                              <>
                                <img
                                  src={image}
                                  alt={`Selected ${index}`}
                                  className="selected-image"
                                  onClick={() => setIndexNumber(index)}
                                  onDragStart={(e) => {
                                    e.dataTransfer.setData(
                                      "index",
                                      index.toString()
                                    );
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
                                <button
                                  className="remove-button"
                                  onClick={() => removeImage(index)}
                                >
                                  Remove
                                </button>
                              </>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ModalBody>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={12}>
            <Row className="mt-2 driver-details px-1 row-flex">
              <div className="d-box"></div>
            </Row>
          </Col>
          <h2 style={{ color: "white" }}>Pick Date and Time</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="dateInput" style={{ color: "white" }}>
                  Date:
                </label>
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
                <label htmlFor="fromMinsInput" style={{ color: "white" }}>
                  Hours:
                </label>
                <input
                  type="number"
                  id="fromMinsInput"
                  value={hours}
                  onChange={handleHours}
                  placeholder="enter hours"
                  className="form-control"
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="toMinsInput" style={{ color: "white" }}>
                  Minutes:
                </label>
                <input
                  type="number"
                  id="toMinsInput"
                  className="form-control"
                  value={minutes}
                  onChange={handleMinutes}
                  placeholder="enter minutes"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address" style={{ color: "white" }}>
                  Address
                </label>
                <input
                  placeholder="Enter the address"
                  type="address"
                  id="addressInput"
                  className="form-control"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="col-6 form-group">
                <label htmlFor="fromMinsInput" style={{ color: "white" }}>
                  From Mins:
                </label>
                <input
                  value={fromMin}
                  type="number"
                  id="fromMinsInput"
                  className="form-control"
                  onChange={handleFromMinutes}
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor="toMinsInput" style={{ color: "white" }}>
                  To Mins:
                </label>
                <input
                  value={toMin}
                  type="number"
                  id="toMinsInput"
                  className="form-control"
                  onChange={handleToMinutes}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex col-md-6 ">
                <div className="form-group">
                  <label htmlFor="latitudeInput" style={{ color: "white" }}>
                    Latitude:
                  </label>
                  <div className="d-flex">
                    <input
                      type="number"
                      placeholder="Enter the Latitude"
                      id="latitudeInput"
                      className="form-control"
                      value={latitude}
                      onChange={handleLatitudeChange}
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
            <div className="col-md-6">
              <div className="d-flex col-md-6">
                <div className="form-group">
                  <label htmlFor="longitudeInput" style={{ color: "white" }}>
                    Longitude:
                  </label>
                  <div className="d-flex">
                    <input
                      type="number"
                      placeholder="Enter the Longitude"
                      id="longitudeInput"
                      className="form-control"
                      value={longitude}
                      onChange={handleLongitudeChange}
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
            </div>
          </div>

          <div className="row">
            {/* <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fontSizeInput" style={{ color: "white" }}>
                  Font Size:
                </label>
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
            </div> */}
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="picNameInput" style={{ color: "white" }}>
                  Enter the pic name:
                </label>
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
            <div className="col-12 d-flex justify-content-center form-group">
              <div>
                <button
                  onClick={() => handleDownload()}
                  className="btn btn-theme btn-block mr-2"
                >
                  Download Images
                </button>
                <button
                  onClick={() => handleDownloadPdf()}
                  className="btn btn-theme btn-block ms-2"
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

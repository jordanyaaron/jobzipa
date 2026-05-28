"use client";
import Footer from "@/components/footer/Footer"
import { useEffect, useState , useRef } from "react";
import { XMarkIcon , PlusIcon , PencilIcon , ArrowUpTrayIcon } from '@heroicons/react/24/outline';
    

export default  function PostPage(){
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [addMoreJob, setAddMoreJob] = useState(false);

  // REFS FOR EVERY INPUT LOCATION
  const logPickerRef = useRef(null);
  const companyNameRef = useRef(null);
  const biographyRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionsRef = useRef(null);
  const descriptionsSummaryRef = useRef(null);
  const positionRef = useRef(null);
  const locationRef = useRef(null);
  const dateRef = useRef(null);
  const fileInputRef =
  useRef<HTMLInputElement>(null);

  //  LOGO PICKER OPEN
  const handlePickLogoImage = () => {
      fileInputRef.current?.click();
  };

  //  CANCEL CROPPING
    const handleRemoveLogo = () => {
        setCroppedImage(null);
        setSelectedImage(null)
    };

  //  LOGO CHANGE HANDLER
    // const handleFileChange = (e) => {
    //         const file = e.target.files?.[0];
        //     if (file) {
        //     const imageURL = URL.createObjectURL(file);
        //     setSelectedImage(imageURL);
        //     setCrop({ x: 0, y: 0 }); 
        //     setZoom(1);
        // }
        // setCropperDisplay("block");
    // };

    const handleFileChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];
    };

  return (
    <>
      <header className="h-16 bg-[var(--background)]  border-b border-theme lg:z-50 flex fixed top-0 left-0 right-0 items-center px-4">
            
        <h1 className="text-2xl font-bold text-black text-main ml-2">
          JobZipa
        </h1>
          <div className="flex-1" />
        <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-[var(--background)] bg-[var(--foreground)]"
        >
            <ArrowUpTrayIcon className="h-6 w-6   text-[var(--background)]" />
        </button>
        
      </header>
      <main className="mt-16 w-full h-auto" > 
          <div className="w-full flex flex-col " >
            <div 
              className="
                w-full min-h-[calc(100vh-120px)] bg-[var(--postground)]
                flex justify-center
              " 
            >
              <div
                className="
                  w-full lg:w-[720px]
                  px-1 lg:px-2 min-h-auto bg-[var(--background)]
                " 
              >
                
                <div
                  className="w-full  mb-2 pt-5"
                >
                  <h1 className="
                    text-lg lg:text-2xl md:ml-30px   font-bold text-main 
                  ">
                    Organisation Details
                  </h1>
                  {/* sections */}
                  {/* logo */}
                  <div className=" mt-[7px] px-[8px] w-full flex items-center">
                      {/* <h3>Organisation Logo</h3>*/}
                      {!imageSrc && !croppedImage  ? (
                          <button ref={logPickerRef}
                              className="
                                  h-[100px]  md:h-[150px]
                                  w-[calc(100vw-20px)] md:w-[590px]
                                 lg:m-[20px]
                                  lg:ml-[37px]
                                  flex
                                  flex-col
                                  justify-center
                                  items-center
                                  text-center
                                  overflow-hidden
                                  rounded-[20px] md:rounded-[30px]
                                  cursor-pointer
                                  border-0
                                  
                                  bg-gradient-to-r from-zinc-900 to-zinc-700
                                  text-white shadow-md
                                  transition-all duration-300
                                  hover:scale-[1.02] hover:shadow-lg
                                  active:scale-95
                                  duration-300
                              "   
                              onClick={handlePickLogoImage}>
                              <img 
                                  src="/gallery.png" 
                                  alt="img-icon" 
                                  className="
                                      h-[20px] lg:h-[30px] 
                                      w-[20px] lg:w-[30px]
                                      mt-[15px] mb-[10px] md:mb-[15px]  cursor-pointer self-center
                                  " 
                              />
                              <p  
                                  className="
                                      text-white font-thin text-sm md:text-lg text-xcursor-pointer
                                  "
                              >
                                  Tap here to add company logo
                              </p>
                          </button>
                          ) : (
                              <div 
                                  className="
                                      relative  inline-block 
                                      w-[150px] md:w-[175px] lg:w-[200px] 
                                      ml-[15px] md:ml-[30px]
                                  "
                              >

                                  {/* Logo Image */}
                                  <img
                                      src={croppedImage || imageSrc || ''}
                                      alt="Logo Preview"
                                      className="
                                          w-[100px] md:w-[125px] lg:w-[150px]
                                          h-[100px]  md:h-[125px] lg:h-[150px]
                                          object-cover
                                          rounded-lg
                                          border
                                          border-gray-300
                                          dark:border-slate-600
                                      "
                                  />

                                  {/* Floating Buttons */}
                                  <div className="absolute top-1 right-1 flex flex-col gap-2">
                                      <button
                                          onClick={handleRemoveLogo}
                                          disabled={addMoreJob}
                                          className="
                                              flex items-center justify-center
                                              w-6 md:w-7  lg:w-8   h-6  md:h-7  lg:h-8
                                              rounded-lg
                                              cursor-pointer
                                              hover:bg-red-900
                                              hover:text-white
                                              bg-gray-800 dark:bg-gray-200
                                              text-white dark:text-gray-800
                                              hover:bg-gray-700
                                              dark:hover:bg-red-900
                                              dark:hover:text-white
                                              dark:hover:text-black
                                              transition-colors duration-200
                                          "
                                      >
                                          <XMarkIcon className="w-4 h-4" />
                                      </button>

                                      <button
                                          onClick={handlePickLogoImage}
                                          disabled={addMoreJob}
                                          className="
                                              flex items-center justify-center
                                              w-6 md:w-7  lg:w-8   h-6  md:h-7  lg:h-8
                                              rounded-lg
                                              bg-gray-800 dark:bg-gray-200
                                              text-white dark:text-gray-800
                                              hover:bg-gray-700 dark:hover:bg-gray-300
                                              transition-colors duration-200
                                          "
                                      >
                                          <PencilIcon className="w-4 h-4" />
                                      </button>
                                  </div>
                              </div>
                          )
                      }
                      
                      
                      <input ref={fileInputRef} type="file" id="logoInput" className="hidden" accept="image/*"  onChange={handleFileChange}/>
                  </div>
                </div>
                <div
                  className="w-full  mb-2"
                >
                  <h1 className="text-lg lg:text-2xl  font-bold  text-main ml-2">
                    Job Details
                  </h1>
                </div>
                <div
                  className="w-full  mb-2"
                >
                  <h1 className="text-lg lg:text-2xl md:ml-30px    font-bold  text-main ">
                    Date Infos
                  </h1>
                </div>
                <div
                  className="w-full  mb-2"
                >
                  <h1 className="text-lg lg:text-2xl  md:ml-30px   font-bold text-main ">
                    Date Infos
                  </h1>
                </div>
                <div
                  className="w-full  mb-2"
                >
                  <h1 className="text-lg lg:text-2xl md:ml-30px   font-bold text-main ">
                    Aplication Link
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-theme min-h-16">
              <Footer/>
            </div>
            
          </div>
      </main>
        
    </>
  );
};




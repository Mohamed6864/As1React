import React from "react";
import "./Portfolio.css";
import img1 from "../assets/imgs/poert1.png"
import img2 from "../assets/imgs/port2.png"
import img3 from "../assets/imgs/port3.png"


export default function Portofolio() {
  return (
    <div className=' py-5 d-flex justify-content-center align-items-center flex-column'>
      <div className='container'>
        <h1 className='text-uppercase  fs-1 text-center fw-bold'>portfolio component</h1>
        <div className="shape d-flex justify-content-center my-3 align-items-center">
          <div className="line bg-black"></div>
          <i class="fa-solid fa-star  mx-3 fa-1x"></i>
          <div className="line bg-black"></div>
        </div>

        <div className="row g-5">
          <div className="col-md-4">
            <div class="image-container" data-bs-toggle="modal" data-bs-target="#imageModal">
              <img src={img1} className='w-100 rounded-4' alt="Sample Image" />
              <div class="layer rounded-4">
                <i class="fa-solid fa-plus text-white fa-5x"></i>
              </div>
            </div>
            <div class="modal fade " id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body text-center ">
                    <img src={img1} alt="Sample Image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="image-container" data-bs-toggle="modal" data-bs-target="#imageModal2">
              <img src={img2} className='w-100 rounded-4' alt="Sample Image" />
              <div class="layer rounded-4">
                <i class="fa-solid fa-plus text-white fa-5x"></i>
              </div>
            </div>
            <div class="modal fade " id="imageModal2" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body text-center ">
                    <img src={img2} alt="Sample Image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div class="image-container" data-bs-toggle="modal" data-bs-target="#imageModal3">
              <img src={img3} className='w-100 rounded-4' alt="Sample Image" />
              <div class="layer rounded-4">
                <i class="fa-solid fa-plus text-white fa-5x"></i>
              </div>
            </div>
            <div class="modal fade " id="imageModal3" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body text-center ">
                    <img src={img3} alt="Sample Image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div class="image-container" data-bs-toggle="modal" data-bs-target="#imageModal4">
              <img src={img1} className='w-100 rounded-4' alt="Sample Image" />
              <div class="layer rounded-4">
                <i class="fa-solid fa-plus text-white fa-5x"></i>
              </div>
            </div>
            <div class="modal fade " id="imageModal4" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body text-center ">
                    <img src={img1} alt="Sample Image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div class="image-container" data-bs-toggle="modal" data-bs-target="#imageModal5">
              <img src={img2} className='w-100 rounded-4' alt="Sample Image" />
              <div class="layer rounded-4">
                <i class="fa-solid fa-plus text-white fa-5x"></i>
              </div>
            </div>
            <div class="modal fade " id="imageModal5" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body text-center ">
                    <img src={img2} alt="Sample Image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div class="image-container" data-bs-toggle="modal" data-bs-target="#imageModal6">
              <img src={img3} className='w-100 rounded-4' alt="Sample Image" />
              <div class="layer rounded-4">
                <i class="fa-solid fa-plus text-white fa-5x"></i>
              </div>
            </div>
            <div class="modal fade " id="imageModal6" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-transparent border-0">
                  <div class="modal-body text-center ">
                    <img src={img3} alt="Sample Image" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
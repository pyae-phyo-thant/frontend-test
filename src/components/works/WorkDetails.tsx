import React from "react";
import "./workDetails.css";

const WorkDetails = () => {
  return (
    <>
      <section style={{ minHeight: "100vh" }}>
        <section className="WorkDetails__mainWrapper">
          <section className="projectDetails__mainWrapper clearfix">
            <section className="projectDetails__copyWrapper">
              <p className="projectDetails__mainHeader is--loadedState">
                OCBC Pay Anyone
              </p>
              <div className="CTAgrid__mainWrapper">
                <a
                  className="CTAgrid__gridGroupWrapper is--loadedState w-full px-4 py-4"
                  href="https://apps.apple.com/sg/app/ocbc-pay-anyone/id1238648978"
                  target="_blank"
                >
                  <div className="CTAgrid__iconItem iconItem__appStore"></div>

                  <p className="CTAgrid__labelItem">Available on</p>

                  <p className="CTAgrid__copyItem">App store</p>
                </a>
                <a
                  className="CTAgrid__gridGroupWrapper is--loadedState px-4 py-4"
                  href="https://play.google.com/store/apps/details?id=com.ocbc.pay&amp;hl=en_SG&amp;gl=US"
                  target="_blank"
                >
                  <div className="CTAgrid__iconItem iconItem__googlePlay"></div>
                  <p className="CTAgrid__labelItem">Available on</p>
                  <p className="CTAgrid__copyItem">Google play</p>
                </a>
              </div>
              <div className="projectDetails__bodyCopy is--loadedState pb-10">
                You can now pay kopitiam uncles, merchants, peers, and dears
                with the OCBC Pay Anyone app, and you can even withdraw cash by
                scanning the QR code at OCBC’s ATMs without your card!
              </div>
              <section className="projectKeyFeatures__mainWrapper clearfix is--loadedState">
                <div className="projectKeyFeatures__labelWrapper">
                  <p className="projectKeyFeatures__labelCopy">Key Features</p>
                </div>
                <div className="projectKeyFeatures__keyFeatureWrapper">
                  <div className="projectKeyFeatures__keyFeatureCopyFormatter">
                    <ul>
                      <li>Scan to pay</li>
                      <li>Transfer cash and request payment</li>
                      <li>ATM QR cash withdrawal</li>
                      <li>Access exclusive discounts and promotions</li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
            <section className="projectDetails__visualWrapper">
              <div
                className="is--loadedState WorkDetailsHeroSlider__ballBG"
                style={{ backgroundColor: "rgb(114, 210, 204)" }}
              ></div>
              <div
                className="slick-slider is--loadedState slickCarousel WorkDetailsHeroSlider__mainWrapper slick-initialized"
                dir="ltr"
              >
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{ width: "7040px", opacity: 1 }}
                  >
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      aria-hidden="false"
                      style={{
                        outline: "none",
                        width: "640px",
                        position: "relative",
                        left: "0px",
                        opacity: 1,
                        transition: "opacity 600ms ease 0s",
                      }}
                    >
                      <div>
                        <img
                          className="WorkDetailsHeroSlider__phoneVis "
                          src="https://cdn.codigo.co/uploads/2021/04/PAO-1.png"
                          style={{ width: "100%", display: "inline-block" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <ul className="slick-dots" style={{ display: "block" }}>
                  <li className="slick-active">
                    <button>1</button>
                  </li>
                  <li className="">
                    <button>2</button>
                  </li>
                  <li className="">
                    <button>3</button>
                  </li>
                  <li className="">
                    <button>4</button>
                  </li>
                  <li className="">
                    <button>5</button>
                  </li>
                </ul> */}
              </div>
            </section>
          </section>
        </section>
        <div
          className="workNavigate__mainWrapper clearfix"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <a className="workNavigate__btnWrapper--left" href="/work/mcdonalds">
            <div className="workNavigate__btn--left "></div>
          </a>
          <a className="workNavigate__btnWrapper--right" href="/work/ecolab">
            <div className="workNavigate__btn--right "></div>
          </a>
        </div>
      </section>
    </>
  );
};

export default WorkDetails;

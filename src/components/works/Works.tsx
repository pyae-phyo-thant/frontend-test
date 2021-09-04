import React from "react";
import "./works.css";

const Works = () => {
  return (
    <>
      <section className="work" style={{ minHeight: "100vh" }}>
        <section className="work_title">
          <span className="font-bold mb-font">
            Here’s 5% of <br />
            our published work.
          </span>
          <br />
          <span className="font-bold md:text-6xl text-red-600 mb-font">
            See 100% of our power.
          </span>
        </section>

        <br />
        <br />
        <br />

        <section className="work_category font-light WorkOnboardAnim__categoryList WorkFilterAndLegend__mainGridWrapper WorkFilterAndLegend--isHorizontal ">
          <section className="workCategory__mainWrapper clearfix">
            <div className="workCategory__itemWrapper is--active">
              <div className="workCategory__itemText">All</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Food &amp; Beverage</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Media</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">
                Transport &amp; Logistics
              </div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">
                Banking &amp; Finance
              </div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Lifestyle</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Co-incubation</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Healthcare</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">
                Retail &amp; Entertainment
              </div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Telco</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Others</div>
            </div>
            <div className="workCategory__itemWrapper ">
              <div className="workCategory__itemText">Start-ups</div>
            </div>
          </section>
          <section className="workLegend__mainWrapper">
            <p className="workLegend__header text-xs">Legend</p>
            <div className="workLegend__itemWrapper clearfix">
              <div className="workLegend__item clearfix">
                <div className="workLegend__itemIcon workLegendItemIcon--app"></div>
                <p className="workLegend__itemText text-xs">APP</p>
              </div>
              <div className="workLegend__item clearfix">
                <div className="workLegend__itemIcon workLegendItemIcon--web"></div>
                <p className="workLegend__itemText text-xs">WEB</p>
              </div>
              <div className="workLegend__item clearfix">
                <div className="workLegend__itemIcon workLegendItemIcon--cms"></div>
                <p className="workLegend__itemText text-xs">CMS</p>
              </div>
              <div className="workLegend__item clearfix">
                <div className="workLegend__itemIcon workLegendItemIcon--uiux"></div>
                <p className="workLegend__itemText text-xs">UI/UX</p>
              </div>
            </div>
          </section>
        </section>

        <section className="Work__compressorGridWrapper">
          <section className="workgrid__mainWrapper grid grid-cols-1 md:grid-cols-4 ">
            <div className="col-span-2 zoomin">
              <a
                className="workGrid__gridItem workGrid__colWidth--span2"
                href="/work/ocbc-pay-anyone"
                style={{ animationDelay: "0.0720335s" }}
              >
                <img
                  className="workGrid__bgImg"
                  src="https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg"
                  sizes="25vw"
                />
                <div
                  className="workGrid__textCategory_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textCategory_text text-xs">
                    Banking &amp; Finance
                  </p>
                </div>

                <div
                  className="workGrid__textProjectTitle_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textProjectTitle_text font-extrabold text-2xl">
                    OCBC Pay Anyone
                  </p>
                </div>
                <div className="workGrid__icoPlatformsOnMainWrapper">
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--app"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--uiux"></div>
                </div>
              </a>
            </div>
            <div className="mb-grid zoomin">
              <a
                className="workGrid__gridItem workGrid__colWidth--span2"
                href="/work/ocbc-pay-anyone"
                style={{ animationDelay: "0.0720335s" }}
              >
                <img
                  className="workGrid__bgImg"
                  src="https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg"
                  sizes="25vw"
                />
                <div
                  className="workGrid__textCategory_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textCategory_text text-xs">Other</p>
                </div>
                <div
                  className="workGrid__textProjectTitle_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textProjectTitle_text font-extrabold text-2xl">
                    Ecolab
                  </p>
                </div>
                <div className="workGrid__icoPlatformsOnMainWrapper">
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--app"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--cms"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--uiux"></div>
                </div>
              </a>
            </div>
            <div className="mb-grid zoomin">
              <a
                className="workGrid__gridItem workGrid__colWidth--span2"
                href="/work/ocbc-pay-anyone"
                style={{ animationDelay: "0.0720335s" }}
              >
                <img
                  className="workGrid__bgImg"
                  src="https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg"
                  sizes="25vw"
                />
                <div
                  className="workGrid__textCategory_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textCategory_text text-sm">
                    Banking &amp; Finance
                  </p>
                </div>
                <div
                  className="workGrid__textProjectTitle_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textProjectTitle_text font-extrabold text-2xl">
                    Other, Start-ups
                  </p>
                </div>
                <div className="workGrid__icoPlatformsOnMainWrapper">
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--app"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--web"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--cms"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--uiux"></div>
                </div>
              </a>
            </div>
            <div className="mb-grid zoomin">
              <a
                className="workGrid__gridItem workGrid__colWidth--span2"
                href="/work/ocbc-pay-anyone"
                style={{ animationDelay: "0.0720335s" }}
              >
                <img
                  className="workGrid__bgImg"
                  src="https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg"
                  sizes="25vw"
                />
                <div
                  className="workGrid__textCategory_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textCategory_text text-sm">
                    Lifestyle
                  </p>
                </div>
                <div
                  className="workGrid__textProjectTitle_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textProjectTitle_text font-extrabold text-2xl">
                    Furama Hotels
                  </p>
                </div>
                <div className="workGrid__icoPlatformsOnMainWrapper">
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--app"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--uiux"></div>
                </div>
              </a>
            </div>
            <div className="mb-grid zoomin">
              <a
                className="workGrid__gridItem workGrid__colWidth--span2"
                href="/work/ocbc-pay-anyone"
                style={{ animationDelay: "0.0720335s" }}
              >
                <img
                  className="workGrid__bgImg"
                  src="https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg"
                  sizes="25vw"
                />
                <div
                  className="workGrid__textCategory_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textCategory_text text-sm">
                    Transport & Logistics
                  </p>
                </div>
                <div
                  className="workGrid__textProjectTitle_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textProjectTitle_text font-extrabold text-2xl">
                    Woodlands Transport
                  </p>
                </div>
                <div className="workGrid__icoPlatformsOnMainWrapper">
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--app"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--web"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--cms"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--uiux"></div>
                </div>
              </a>
            </div>
            <div className="col-span-2 img-hover-zoom--brightness zoomin">
              <a
                className="workGrid__gridItem workGrid__colWidth--span2 "
                href="/work/ocbc-pay-anyone"
                style={{ animationDelay: "0.0720335s" }}
              >
                <img
                  className="workGrid__bgImg"
                  src="https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg"
                  sizes="25vw"
                />
                <div
                  className="workGrid__textCategory_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textCategory_text text-sm text-black">
                    Lifestyle, Retail & Entertainment, Start-ups
                  </p>
                </div>
                <div
                  className="workGrid__textProjectTitle_gridWrapper"
                  style={{ color: "white" }}
                >
                  <p className="workGrid__textProjectTitle_text font-extrabold text-2xl text-black">
                    Ready To Travel (SATS)
                  </p>
                </div>
                <div className="workGrid__icoPlatformsOnMainWrapper">
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--app"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--web"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--cms"></div>
                  <div className="workGrid__IcoPlatforms workGridIcoPlatforms--uiux"></div>
                </div>
              </a>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Works;

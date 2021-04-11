
import React, { Component } from "react";

export class Prodcarousel extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselSlides"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselSlides"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselSlides" data-slide-to="1"></li>
            <li data-target="#carouselSlides" data-slide-to="2"></li>
            <li data-target="#carouselSlides" data-slide-to="3"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <a href="@Url.Action("PreciousLace","Home")"> */}
              <img
                class="d-block w-100"
                src="https://blobstoragecameo.blob.core.windows.net/carousel/PreciousLaceBG.png"
                alt="Precious Lace Chopard"
              />
              {/* </a> */}
              <div class="carousel-caption d-none d-md-block" id="gray">
                <h5 class="subtitle">PRECIOUS LACE</h5>
                <p class="slide-subtitle">COLLECTION</p>
              </div>
            </div>

            <div class="carousel-item">
              {/* <a href="@Url.Action("HappyDiamonds","Home")"> */}
              <img
                class="d-block w-100"
                src="https://blobstoragecameo.blob.core.windows.net/carousel/ChopardBG.png"
                alt="Happy Diamonds Chopard"
              />
              {/* </a> */}
              <div class="carousel-caption d-md-block">
                <h5 class="subtitle" color="white">
                  HAPPY DIAMONDS
                </h5>
                <p class="slide-subtitle" color="white">
                  COLLECTION
                </p>
              </div>
            </div>

            <div class="carousel-item">
              {/* <a href="@Url.Action("AlpineEagle","Home")"> */}
              <img
                class="d-block w-100"
                src="https://blobstoragecameo.blob.core.windows.net/carousel/AlpineBG.png"
                alt="Alpine Eagle Chopard"
              />
              {/* </a> */}
              <div class="carousel-caption d-md-block">
                <h5 class="subtitle">ALPINE EAGLE</h5>
                <p class="slide-subtitle">COLLECTION</p>
              </div>
            </div>

            <div class="carousel-item">
              {/* <a href="@Url.Action("HappyHearts","Home")"> */}
              <img
                class="d-block w-100"
                src="https://blobstoragecameo.blob.core.windows.net/carousel/HappyHearts.png"
                alt="Happy Hearts Chopard"
              />
              {/* </a> */}
              <div class="carousel-caption d-none d-md-block">
                <h5 class="subtitle">HAPPY HEARTS</h5>
                <p class="slide-subtitle">COLLECTION</p>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselSlides"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselSlides"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </a>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Prodcarousel;

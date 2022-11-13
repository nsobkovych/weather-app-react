export default function Weather() {
  return (
    <div className="Weather">
      <div className="row row-cols-1 mt-3">
        <div className="col col-lg-8 col-xxl-6">
          <div className="card w-wrapper">
            <div className="card-header py-4 bg-transparent w-search-section">
              <form role="search" name="search-city-form">
                <div className="input-group">
                  <input
                    type="search"
                    id="q"
                    name="q"
                    className="form-control"
                    placeholder="What is your city"
                    aria-label="What is your city"
                    aria-describedby="search-btn"
                    autoComplete="off"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    name="search-btn"
                    id="search-btn"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="card-body text-center">
              <div className="row row-cols-1 row-cols-sm-2 align-items-end">
                <div className="col text-sm-start mb-3 mb-sm-0">
                  <h1 className="city">London</h1>
                  <div className="card-text date"></div>
                  <div className="card-text time"></div>
                </div>
                <div className="col my-3 my-sm-0">
                  <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col align-self-end text-sm-end mb-3 mb-sm-0">
                      <div className="w-image">
                        <img
                          src="img/01d_clear_day_FILL0_wght400_GRAD0_opsz48.svg"
                          alt="Weather icon"
                        />
                      </div>
                    </div>
                    <div className="col text-sm-start ps-sm-0">
                      <div className="degree d-flex align-items-start justify-content-center justify-content-sm-start">
                        <span
                          id="w-degree"
                          className="w-degree display-3 flex-sm-fill"
                        >
                          10
                        </span>
                        <button
                          type="button"
                          className="btn btn-link btn-degree btn-active flex-sm-fill btn-celsius"
                        >
                          °C
                        </button>
                        <span className="divider"></span>
                        <button
                          type="button"
                          className="btn btn-link btn-degree flex-sm-fill btn-fahrenheit"
                        >
                          °F
                        </button>
                      </div>
                      <small className="w-type"></small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-details mt-5 d-flex justify-content-center justify-content-sm-start">
                <span className="badge badge-custom bg-transparent">
                  <img src="img/air_FILL0_wght400_GRAD0_opsz48.svg" alt="I" />
                  <span className="w-wind">2km/h</span>
                </span>
                <span className="badge badge-custom bg-transparent">
                  <img
                    src="img/03d_cloudy_FILL0_wght400_GRAD0_opsz48.svg"
                    alt="I"
                  />
                  <span className="w-clouds">60%</span>
                </span>
                <span className="badge badge-custom bg-transparent">
                  <img
                    src="img/humidity_low_FILL0_wght400_GRAD0_opsz48.svg"
                    alt="I"
                  />
                  <span className="w-humidity">80%</span>
                </span>
              </div>
            </div>
            <div className="card-footer w-forecast text-center py-4 bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Card from "./Card";
import Data from "./Data";
import React, { useRef } from "react";

function Services() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [width, height] = windowSize.current;
    const isMobile = width <= 500;
  return (
    <div className="container services">
        <h2 className="main-title text-center">KEJUARAAN</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    {isMobile ? (
                        <div>
                            {Data.map((val) => {
                                return <Card key={val.id} title={val.name} img={val.image} description={val.description} />
                            })}
                        </div>
                    ) : (
                        <div className="serv">
                        <ul>
                            {Data.map((val) => {
                                return <Card key={val.id} title={val.name} img={val.image} description={val.description} />
                            })}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;

import React from "react";
import "./Details.scss";


const Detail = () => {
    return (
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-details regular-body-s-14-">

            <div className="block-header">
                <p>Details</p>
            </div>

            <div className="aem-Grid aem-Grid--12 detail-container">

                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">

                    <div><img className="sweat-img" src={require("../../Assets/sweat.png")} />&nbsp;&nbsp;Sweat-wicking</div>

                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">

                    <div><img className="breathable-img" src={require("../../Assets/breathable.png")} />&nbsp;&nbsp;Breathable</div>

                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">

                    <div><img className="feather-img" src={require("../../Assets/feather.png")} />&nbsp;&nbsp;Lightweight fabric</div>

                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">

                    <div><img className="materials-img" src={require("../../Assets/materials.png")} />&nbsp;&nbsp;69% nylon, 31% lycra</div>

                </div>

            </div>

        </div>
    )
}

export default Detail;
export default function Grid(){
    return (
        <div className="grid grid-cols-3 gap-4"> {/* Updated className */}
                {/* First Column */}
                <div className="spark-wrapped-card spark-stacked">
                    <a href="#" className="w-inline-block">
                        <img
                            width={80}
                            data-w-id="d8d9b747-d5c0-c5e6-be55-4256c184aac9"
                            alt=""
                            src="images/Ratio-1_2Ratio-1_1.webp"
                            loading="eager"
                            srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w"
                            sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px"
                            className="spark-square-image-card"
                        />
                    </a>
                    <div className="spark-card-details">
                        <p className="spark-bold-heading spark-card-title">
                            Product title
                        </p>
                        <p className="spark-small-sub-paragraph">
                            Aut aliquam et at quod. Fuga atque qui. Ullam facere
                            quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam
                            voluptate ut.
                        </p>
                    </div>
                </div>

                {/* Second Column */}
                <div
                    id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aacf-c184aa9d"
                    className="spark-wrapped-card spark-stacked"
                >
                    <a href="#" className="w-inline-block">
                        <img
                            width={80}
                            sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.328125px"
                            alt=""
                            src="images/Ratio-1_2Ratio-1_1.webp"
                            loading="eager"
                            srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w"
                            className="spark-square-image-card"
                        />
                    </a>
                    <div className="spark-card-details">
                        <p className="spark-bold-heading spark-card-title">
                            Product title
                        </p>
                        <p className="spark-small-sub-paragraph">
                            Product information, Lorem Ipsum. Fuga atque qui. Ullam
                            facere quibusdam. Dolorem ut id. Eum ullam laborum et.
                            Aliquam voluptate ut.
                        </p>
                    </div>
                </div>

                {/* Third Column */}
                <div
                    id="w-node-d8d9b747-d5c0-c5e6-be55-4256c184aad7-c184aa9d"
                    className="spark-wrapped-card spark-stacked"
                >
                    <a href="#" className="w-inline-block">
                        <img
                            width={80}
                            sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, (max-width: 1919px) 25vw, 437.34375px"
                            alt=""
                            src="images/Ratio-1_2Ratio-1_1.webp"
                            loading="eager"
                            srcSet="images/Ratio-1_2-p-500.jpg 500w, images/Ratio-1_2Ratio-1_1.webp 684w"
                            className="spark-square-image-card"
                        />
                    </a>
                    <div className="spark-card-details">
                        <p className="spark-bold-heading spark-card-title">
                            Product title
                        </p>
                        <p className="spark-small-sub-paragraph">
                            Product information, Lorem Ipsum. Fuga atque qui. Ullam
                            facere quibusdam. Dolorem ut id. Eum ullam laborum et.
                            Aliquam voluptate ut.
                        </p>
                    </div>
                </div>
            </div>
    )
}
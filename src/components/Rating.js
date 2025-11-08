function Rating() {
    return (
        <div className="tab-content bg-base-100 border-base-300 p-6 justify-items-center">
          <div className="rating gap-1">
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="1 star"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="2 star"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="3 star"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="4 star" aria-current="true"></div>
            <div name="rating-3" className="mask mask-heart bg-yellow-200" aria-label="5 star"></div>
          </div>

        </div>
    );
}

export default Rating;
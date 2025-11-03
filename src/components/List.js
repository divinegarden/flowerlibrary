function List() {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
        
        
        <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
            <div><img className="size-10 rounded-box" src="https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg"/></div>
            <div className="list-col-grow">
            <div>Rosaceae</div>
            <div className="text-xs uppercase font-semibold opacity-60">Rosa común</div>
            </div>
        </li>
        
        <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
            <div><img className="size-10 rounded-box" src="https://live.staticflickr.com/3531/4034776611_8b1a9f55c0_b.jpg"/></div>
            <div className="list-col-grow">
            <div>Solanaceae</div>
            <div className="text-xs uppercase font-semibold opacity-60">Petunia</div>
            </div>
        </li>
        
        <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
            <div><img className="size-10 rounded-box" src="https://www.publicdomainpictures.net/pictures/60000/nahled/tulip-flower-pink.jpg"/></div>
            <div className="list-col-grow">
            <div>Liliaceae</div>
            <div className="text-xs uppercase font-semibold opacity-60">Tulipán Común</div>
            </div>
        </li>
        
        </ul>
    );
}

export default List;
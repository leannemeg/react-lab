import '../css/Profile.css'

export default function Gallery() {
    const fullname = "Adrian Chase";
    return (
        <section>
            <h2 className="profile-title">{fullname}</h2>
            <div className="gallery">
                <img src="./src/assets/boom.png" className="png1" alt="DC character" style={{ width: '23.4rem' }}/>
                <img src="./src/assets/img1.jpg" className="profile" alt="DC character" style={{ width: '23.4rem' }}/>
                <img src="./src/assets/crash.png" className="png2" alt="DC character" style={{ width: '23.4rem' }}/>
            </div>
        </section>
    );
}
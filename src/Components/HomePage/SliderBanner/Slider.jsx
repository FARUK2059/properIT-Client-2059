import { Link } from "react-router-dom";


const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">

                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZSUyMGJhbm5lciUyMGJhZCUyMHByb2R1Y3QlMjBpbWd8ZW58MHx8MHx8fDA%3D" className="w-full rounded-md" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white '>
                            <h2 className='lg:text-6xl text-4xl font-bold p-2'>There are Most categories product web search queries</h2>
                            <p>The rise of artificial intelligence (AI) has revolutionized various industries, from healthcare to finance</p>
                            <div className="p-4">
                                <Link to="/myqueries"><button className="btn btn-primary mr-5">My Query</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://tweakyourbiz.com/wp-content/uploads/2019/08/IoT-future-of-Technology-Innovation.jpg" className="w-full rounded-md" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white '>
                            <h2 className='lg:text-6xl text-4xl font-bold p-2'>There are Most categories product web search queries</h2>
                            <p>The rise of artificial intelligence (AI) has revolutionized various industries, from healthcare to finance</p>
                            <div className="p-4">
                                <Link to="/myqueries"><button className="btn btn-primary mr-5">My Query</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://slidingmotion.com/wp-content/uploads/2021/06/technology-4256272_1280.jpg" className="w-full rounded-md" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white  '>
                            <h2 className='lg:text-6xl text-4xl font-bold p-2'>There are Most categories product web search queries</h2>
                            <p>The rise of artificial intelligence (AI) has revolutionized various industries, from healthcare to finance</p>
                            <div className="p-4">
                                <Link to="/myqueries"><button className="btn btn-primary mr-5">My Query</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;
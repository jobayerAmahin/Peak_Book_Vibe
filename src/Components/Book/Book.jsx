import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookName,author,image,rating,category,tags,bookId}=book;
    return (
        <Link to={`book/${bookId}`}>

            <div>
                <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-lg">
                    <div className="w-[326px] h-[230px] mx-auto flex items-center justify-center bg-slate-300">
                        <img className="w-[150px] h-[200px]"
                        src={image}
                        alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <div className="flex items-center gap-8">
                            {
                                tags.map((tag,idx)=><div key={idx} className="badge badge-outline text-green-400 font-bold">{tag}</div>)
                            }
                        </div>

                        <h2 className="card-title">
                        {bookName}
                        
                        </h2>
                        <p>By: {author}</p>
                        <div className="flex items-center justify-between">
                            <p>{category}</p>
                            <p className="flex items-center gap-2">
                                <span>{rating}</span>
                                <FaRegStar />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
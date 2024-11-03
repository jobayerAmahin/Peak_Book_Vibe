

const MarkBar = ({mark}) => {
    const {bookName,image,author}=mark
    return (
        <div className="border-2 border-dashed border-blue-300 my-8 p-8 flex justify-between items-center">
            <div>
                <h1>{bookName}</h1>
                <h2>{author}</h2>
            </div>
            <img className="w-20 h-30" src={image} alt="" />
        </div>
    );
};

export default MarkBar;
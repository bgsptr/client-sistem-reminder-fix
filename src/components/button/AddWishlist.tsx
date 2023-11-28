import iconHeart from "../../assets/addButtonIco.svg";

const AddWishlist = () => {
  return (
    <button className="border-2 bg-primary w-2/5 py-4 rounded-xl mt-10">
      <div className="flex items-center justify-center gap-2">
        <img src={iconHeart} />
        <div>Add to Wishlist</div>
      </div>
    </button>
  );
};

export default AddWishlist;

import classNames from "classnames";

const PlaylistFavouriteIcon: React.FC<{ isActive: boolean }> = ({
  isActive,
}) => {
  return (
    <div
      className={classNames(
        {
          "opacity-1": isActive,
          "opacity-70": !isActive,
        },
        " w-6 h-6 flex justify-center items-center rounded-sm transition-opacity bg-[linear-gradient(135deg,#450af5,#c4efd9)] "
      )}
    >
      <svg
        role="img"
        height="12"
        width="12"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        fill="#ffffff"
      >
        <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
      </svg>
    </div>
  );
};

export default PlaylistFavouriteIcon;

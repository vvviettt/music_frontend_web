import classNames from "classnames";

const PlaylistIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div
      className={classNames(
        { "bg-white": isActive, "bg-[#b3b3b3]": !isActive },
        " w-6 h-6 flex justify-center items-center rounded-sm transition-colors"
      )}
    >
      <svg
        role="img"
        height="12"
        width="12"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        fill="#000"
      >
        <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
      </svg>
    </div>
  );
};

export default PlaylistIcon;

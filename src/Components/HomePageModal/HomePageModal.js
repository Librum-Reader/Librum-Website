import "./HomePageModal.css";

export default function HomePageModal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="header">
          <h2>No Features</h2>
        </div>
        <div className="body">
          <p></p>
          <button
            onClick={() => {
              props.setOpen(false);
            }}
          >
            Ok!
          </button>
        </div>
      </div>
    </div>
  );
}

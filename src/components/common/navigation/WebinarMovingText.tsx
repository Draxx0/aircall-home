import Calendar from "../../../assets/icons/calendar.webp";
import { navigationDataInterface } from "../../../types/navigationTypes";

const WebinarMovingText = ({
  webinar,
}: {
  webinar: navigationDataInterface["topNavigation"]["webinar"];
}) => {
  return (
    <div className="flex items-center gap-2 leading-5 text-white">
      <img src={Calendar} alt="icone de calendrier" className="w-5" />
      <p className="min-w-max">
        {webinar.webinarText}{" "}
        <a href="/" className="underline ">
          {webinar.webinarButton}
        </a>
      </p>
    </div>
  );
};

export default WebinarMovingText;

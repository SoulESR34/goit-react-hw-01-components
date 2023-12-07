import { StatiticsWrapper, TitleStatics, DataContainer, Data} from "./Statics.style";
import PropTypes from "prop-types"

const UploadStats = (props) => {

    return (

      <StatiticsWrapper className="statistics">
        <TitleStatics className="title">{props.data.title}</TitleStatics>

        <DataContainer className="stat-Datast">
          <Data className="item" id={props.data[0].id} $variant='docx'>
            <span className="label">.docx</span>
            <span className="percentage">{props.data[0].percentage}%</span>
          </Data>

          <Data className="item" id={props.data[1].id} $variant='mp3'>
            <span className="label">.mp3</span>
            <span className="percentage">{props.data[1].percentage}%</span>
          </Data>

          <Data className="item" id={props.data[2].id} $variant='pdf'>
            <span className="label">.pdf</span>
            <span className="percentage">{props.data[2].percentage}%</span>
          </Data>

          <Data className="item" id={props.data[3].id} $variant='psd'>
            <span className="label">.psd</span>
            <span className="percentage">{props.data[3].percentage}%</span>
          </Data>
        </DataContainer>
      </StatiticsWrapper>
  );
};

UploadStats.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ) 
}

export default UploadStats;
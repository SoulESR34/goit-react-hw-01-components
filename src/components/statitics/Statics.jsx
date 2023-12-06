import { StatiticsWrapper, TitleStatics, DataContainer, Data} from "./Statics.style";
import PropTypes from "prop-types"

const UploadStats = (props) => {
  const docx = props.data[0]
  const pdf = props.data[1]
  const mp3 = props.data[2]
  const psd = props.data[3]
    return (

      <StatiticsWrapper className="statistics">
        <TitleStatics className="title">{props.title}</TitleStatics>

        <DataContainer className="stat-Datast">
          <Data className="item" id={docx.id} $variant='docx'>
            <span className="label">.docx</span>
            <span className="percentage">{docx.percentage}%</span>
          </Data>

          <Data className="item" id={mp3.id} $variant='mp3'>
            <span className="label">.mp3</span>
            <span className="percentage">{mp3.percentage}%</span>
          </Data>

          <Data className="item" id={pdf.id} $variant='pdf'>
            <span className="label">.pdf</span>
            <span className="percentage">{pdf.percentage}%</span>
          </Data>

          <Data className="item" id={psd.id} $variant='psd'>
            <span className="label">.psd</span>
            <span className="percentage">{psd.percentage}%</span>
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
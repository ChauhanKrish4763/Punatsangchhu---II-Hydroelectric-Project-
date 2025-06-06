import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Management.css';

function withLocation(Component) {
  return function WrappedComponent(props) {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

class ContentPage extends React.Component {
  render() {
    const { location } = this.props;
    // fallback in case state is missing
    const { title, imageSrc, imageAlt, paragraphs } = location.state || {
      title: "No Title",
      imageSrc: "",
      imageAlt: "",
      paragraphs: [],
    };

    return (
      <div className="chairman-page">
        <div className="chairman-content">
          <div className="chairman-left">
            <h1 className="chairman-title">{title}</h1>
            <img src={imageSrc} alt={imageAlt} className="chairman-img" />
          </div>
          <div className="chairman-text">
            {paragraphs.map((para, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withLocation(ContentPage);

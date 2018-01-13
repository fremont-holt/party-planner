var React = require("react");
var ReactDom = require("react-dom");

function Logo(props) {
  return <div className="wrapper--logo">
      <svg className="logo" width={props.width} height={props.height} viewBox="0 0 93 150" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <desc>Created using Figma</desc>
        <g id="Canvas" transform="translate(508 175)">
          <g id="Party Boy">
            <g id="Vector" transform="translate(-524.5 -130.5)">
              <use xlinkHref="#path0_fill" fill="#F2C94C" />
              <use xlinkHref="#path1_stroke" />
            </g>
            <g id="Vector 2" transform="translate(-491 -174.5)">
              <use xlinkHref="#path2_fill" fill="#BB6BD9" />
              <use xlinkHref="#path3_stroke" fill="#333" />
            </g>
            <use xlinkHref="#path4_fill" transform="translate(-476 -61)" fill="#333" id="Ellipse 3" />
            <use xlinkHref="#path5_fill" transform="translate(-493 -94)" fill="#F2F2F2" id="Ellipse" />
            <use xlinkHref="#path6_fill" transform="translate(-453 -94)" fill="#F2F2F2" id="Ellipse 2" />
            <use xlinkHref="#path7_fill" transform="translate(-446 -86)" fill="#333" id="Ellipse 4" />
            <use xlinkHref="#path8_fill" transform="translate(-488 -92)" fill="#333" id="Ellipse 5" />
            <use xlinkHref="#path9_fill" transform="translate(-473 -134)" fill="#56CCF2" id="Ellipse" />
            <use xlinkHref="#path10_fill" transform="translate(-458 -134)" fill="#56CCF2" id="Ellipse" />
            <use xlinkHref="#path11_fill" transform="translate(-466 -154)" fill="#56CCF2" id="Ellipse" />
          </g>
        </g>
        <defs>
          <path id="path0_fill" d="M 98.2382 86.1527L 99.3918 84.627C 116.377 62.163 108.887 29.8025 83.7593 17.0855C 64.2269 7.2002 40.4176 12.7446 27.2617 30.2419L 26.1122 31.7708C 11.5303 51.1647 14.8778 78.6148 33.6933 93.936C 53.53 110.089 82.8098 106.558 98.2382 86.1527Z" />
          <path id="path1_stroke" d="M 99.3918 84.627L 99.7906 84.9286L 99.3918 84.627ZM 98.2382 86.1527L 97.8393 85.8512L 98.2382 86.1527ZM 26.1122 31.7708L 25.7126 31.4703L 26.1122 31.7708ZM 27.2617 30.2419L 27.6614 30.5424L 27.2617 30.2419ZM 33.6933 93.936L 34.009 93.5482L 33.6933 93.936ZM 83.7593 17.0855L 83.9851 16.6394L 83.7593 17.0855ZM 98.993 84.3255L 97.8393 85.8512L 98.637 86.4543L 99.7906 84.9286L 98.993 84.3255ZM 26.5119 32.0712L 27.6614 30.5424L 26.8621 29.9414L 25.7126 31.4703L 26.5119 32.0712ZM 34.009 93.5482C 15.4018 78.3967 12.0914 51.2505 26.5119 32.0712L 25.7126 31.4703C 10.9692 51.0789 14.3538 78.8329 33.3776 94.3237L 34.009 93.5482ZM 97.8393 85.8512C 82.5818 106.031 53.6261 109.522 34.009 93.5482L 33.3776 94.3237C 53.4339 110.655 83.0378 107.085 98.637 86.4543L 97.8393 85.8512ZM 83.5335 17.5316C 108.383 30.1079 115.79 62.1101 98.993 84.3255L 99.7906 84.9286C 116.964 62.2159 109.391 29.4972 83.9851 16.6394L 83.5335 17.5316ZM 83.9851 16.6394C 64.2365 6.64466 40.1636 12.2504 26.8621 29.9414L 27.6614 30.5424C 40.6716 13.2388 64.2173 7.75575 83.5335 17.5316L 83.9851 16.6394Z" />
          <path id="path2_fill" d="M 26.1676 1.89591L 0.615508 60.098C 0.325391 60.7588 0.809449 61.5 1.53115 61.5L 57.8405 61.5C 58.5937 61.5 59.0766 60.6987 58.7246 60.0328L 27.9674 1.83067C 27.5765 1.09088 26.504 1.12975 26.1676 1.89591Z" />
          <path id="path3_stroke" d="M 0.615508 60.098L 1.53115 60.5L 1.53115 60.5L 0.615508 60.098ZM 26.1676 1.89591L 27.0833 2.2979L 27.0833 2.2979L 26.1676 1.89591ZM 27.9674 1.83067L 28.8516 1.36345L 28.8516 1.36345L 27.9674 1.83067ZM 58.7246 60.0328L 59.6088 59.5655L 58.7246 60.0328ZM 1.53115 60.5L 27.0833 2.2979L 25.252 1.49392L -0.300136 59.696L 1.53115 60.5ZM 27.0833 2.2979L 57.8405 60.5L 59.6088 59.5655L 28.8516 1.36345L 27.0833 2.2979ZM 57.8405 60.5L 1.53115 60.5L 1.53115 62.5L 57.8405 62.5L 57.8405 60.5ZM 57.8405 60.5L 57.8405 62.5C 59.347 62.5 60.3126 60.8975 59.6088 59.5655L 57.8405 60.5ZM 27.0833 2.2979L 27.0833 2.2979L 28.8516 1.36345C 28.0697 -0.116151 25.9247 -0.038398 25.252 1.49392L 27.0833 2.2979ZM -0.300136 59.696C -0.880372 61.0177 0.0877477 62.5 1.53115 62.5L 1.53115 60.5L 1.53115 60.5L -0.300136 59.696Z" />
          <path id="path4_fill" d="M 30 10C 30 15.5228 23.2843 20 15 20C 6.71573 20 0 15.5228 0 10C 0 4.47715 6.71573 0 15 0C 23.2843 0 30 4.47715 30 10Z" />
          <path id="path5_fill" d="M 27 10C 27 15.5228 20.9558 20 13.5 20C 6.04416 20 0 15.5228 0 10C 0 4.47715 6.04416 0 13.5 0C 20.9558 0 27 4.47715 27 10Z" />
          <path id="path6_fill" d="M 20 10C 20 15.5228 15.5228 20 10 20C 4.47715 20 0 15.5228 0 10C 0 4.47715 4.47715 0 10 0C 15.5228 0 20 4.47715 20 10Z" />
          <path id="path7_fill" d="M 5 2.5C 5 3.88071 3.88071 5 2.5 5C 1.11929 5 0 3.88071 0 2.5C 0 1.11929 1.11929 0 2.5 0C 3.88071 0 5 1.11929 5 2.5Z" />
          <path id="path8_fill" d="M 17 8.5C 17 13.1944 13.1944 17 8.5 17C 3.80558 17 0 13.1944 0 8.5C 0 3.80558 3.80558 0 8.5 0C 13.1944 0 17 3.80558 17 8.5Z" />
          <path id="path9_fill" d="M 7 4C 7 6.20914 5.433 8 3.5 8C 1.567 8 0 6.20914 0 4C 0 1.79086 1.567 0 3.5 0C 5.433 0 7 1.79086 7 4Z" />
          <path id="path10_fill" d="M 15 7.5C 15 11.6421 11.6421 15 7.5 15C 3.35786 15 0 11.6421 0 7.5C 0 3.35786 3.35786 0 7.5 0C 11.6421 0 15 3.35786 15 7.5Z" />
          <path id="path11_fill" d="M 10 5C 10 7.76142 7.76142 10 5 10C 2.23858 10 0 7.76142 0 5C 0 2.23858 2.23858 0 5 0C 7.76142 0 10 2.23858 10 5Z" />
        </defs>
      </svg>
    </div>;
}

module.exports = Logo;

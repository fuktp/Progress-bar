import React from "react";
import { Motion, spring } from "react-motion";

const ItineraryProgressMeter = ({ complete, small }) => {
  const style = small ? { height: "70vh" } : {};
  const height = complete == 1 ? 531 : Math.ceil(485 * complete);
  return (
    <Motion style={{ height: spring(height, { stiffness: 90, damping: 15 }) }}>
      {({ height }) => {
        const h = height && height >= 0 ? height : 0;
        return (
          <svg
            style={style}
            width="190"
            height="531"
            viewBox="0 0 190 531"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="mask">
                <g fill="#fff">
                  <path d="M186.645 462.115H167.65v-27.967c0-1.855-1.502-3.36-3.355-3.36h-13.2V216.62c0-1.854-1.5-3.358-3.355-3.358h-9.063v-26.307c0-1.855-1.502-3.358-3.355-3.358h-16.515v-26.31c0-1.854-1.502-3.357-3.355-3.357h-3.78c-2.903-6.193-12.318-29.556-12.318-71.892V54.36c0-1.857-1.5-3.36-3.354-3.36s-3.354 1.504-3.354 3.36v27.676c0 42.336-9.418 65.7-12.318 71.892h-3.782c-1.852 0-3.355 1.503-3.355 3.358v26.308H56.68c-1.853 0-3.355 1.503-3.355 3.36v26.306H44.26c-1.855 0-3.356 1.504-3.356 3.36v214.17h-13.2c-1.852 0-3.354 1.503-3.354 3.358v27.966H5.355c-1.853 0-3.355 1.503-3.355 3.358v62.17C2 529.495 3.502 531 5.355 531h181.29c1.854 0 3.355-1.503 3.355-3.36v-62.168c0-1.854-1.5-3.357-3.355-3.357zM96 123.833c2.562 14.736 6.026 24.655 8.31 30.095H87.69c2.288-5.44 5.75-15.36 8.31-30.095zm-16.1 36.812h32.2v22.95H79.9v-22.95zM60.035 190.31h71.934v22.95H60.03v-22.95zm-12.42 29.67h96.773v210.81H47.614V219.98h.002zM31.06 437.506h129.88v24.61H31.06v-24.61zm152.23 86.778H8.71v-55.452h174.58v55.452z" />
                  <path d="M63.5 229c-1.933 0-3.5 1.475-3.5 3.293v23.415c0 1.818 1.567 3.292 3.5 3.292s3.5-1.474 3.5-3.292v-23.415c0-1.82-1.568-3.293-3.5-3.293z" />
                  <path d="M95.5 0C93.567 0 92 1.475 92 3.293v23.415C92 28.526 93.567 30 95.5 30s3.5-1.474 3.5-3.292V3.293C99 1.473 97.432 0 95.5 0zM54.893 24.393c-1.367 1.367-1.432 3.518-.146 4.804l16.557 16.557c1.286 1.285 3.436 1.22 4.803-.147s1.432-3.517.147-4.803L59.697 24.247c-1.287-1.286-3.437-1.22-4.804.146zm81.214 0c-1.367-1.367-3.518-1.432-4.804-.146l-16.557 16.557c-1.285 1.286-1.22 3.436.147 4.803s3.517 1.432 4.803.147l16.557-16.557c1.286-1.287 1.22-3.437-.146-4.804z" />
                  <path d="M80.5 229c-1.933 0-3.5 1.475-3.5 3.293v23.415c0 1.818 1.568 3.292 3.5 3.292 1.933 0 3.5-1.474 3.5-3.292v-23.415c0-1.82-1.567-3.293-3.5-3.293zm15 0c-1.934 0-3.5 1.475-3.5 3.293v23.415c0 1.818 1.566 3.292 3.5 3.292 1.933 0 3.5-1.474 3.5-3.292v-23.415c0-1.82-1.568-3.293-3.5-3.293zm17 0c-1.933 0-3.5 1.475-3.5 3.293v23.415c0 1.818 1.566 3.292 3.5 3.292s3.5-1.474 3.5-3.292v-23.415c0-1.82-1.566-3.293-3.5-3.293zm16 0c-1.934 0-3.5 1.475-3.5 3.293v23.415c0 1.818 1.567 3.292 3.5 3.292 1.932 0 3.5-1.474 3.5-3.292v-23.415c0-1.82-1.567-3.293-3.5-3.293zm-65 41c-1.933 0-3.5 1.474-3.5 3.293v23.415c0 1.818 1.567 3.292 3.5 3.292s3.5-1.475 3.5-3.292v-23.415c0-1.82-1.568-3.293-3.5-3.293zm17 0c-1.933 0-3.5 1.474-3.5 3.293v23.415c0 1.818 1.568 3.292 3.5 3.292 1.933 0 3.5-1.475 3.5-3.292v-23.415c0-1.82-1.567-3.293-3.5-3.293zm15 0c-1.934 0-3.5 1.474-3.5 3.293v23.415c0 1.818 1.566 3.292 3.5 3.292 1.933 0 3.5-1.475 3.5-3.292v-23.415c0-1.82-1.568-3.293-3.5-3.293zm17 0c-1.933 0-3.5 1.474-3.5 3.293v23.415c0 1.818 1.566 3.292 3.5 3.292s3.5-1.475 3.5-3.292v-23.415c0-1.82-1.566-3.293-3.5-3.293zm16 0c-1.934 0-3.5 1.474-3.5 3.293v23.415c0 1.818 1.567 3.292 3.5 3.292 1.932 0 3.5-1.475 3.5-3.292v-23.415c0-1.82-1.567-3.293-3.5-3.293zm-65 41c-1.933 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.567 3.293 3.5 3.293s3.5-1.474 3.5-3.293V314.29c0-1.816-1.568-3.29-3.5-3.29zm17 0c-1.933 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.568 3.293 3.5 3.293 1.933 0 3.5-1.474 3.5-3.293V314.29c0-1.816-1.567-3.29-3.5-3.29zm15 0c-1.934 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.566 3.293 3.5 3.293 1.933 0 3.5-1.474 3.5-3.293V314.29c0-1.816-1.568-3.29-3.5-3.29zm17 0c-1.933 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.566 3.293 3.5 3.293s3.5-1.474 3.5-3.293V314.29c0-1.816-1.566-3.29-3.5-3.29zm16 0c-1.934 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.567 3.293 3.5 3.293 1.932 0 3.5-1.474 3.5-3.293V314.29c0-1.816-1.567-3.29-3.5-3.29zm-65 42c-1.933 0-3.5 1.473-3.5 3.29v23.42c0 1.817 1.567 3.29 3.5 3.29s3.5-1.474 3.5-3.29v-23.42c0-1.817-1.568-3.29-3.5-3.29zm17 0c-1.933 0-3.5 1.473-3.5 3.29v23.42c0 1.817 1.568 3.29 3.5 3.29 1.933 0 3.5-1.474 3.5-3.29v-23.42c0-1.817-1.567-3.29-3.5-3.29zm15 0c-1.934 0-3.5 1.473-3.5 3.29v23.42c0 1.817 1.566 3.29 3.5 3.29 1.933 0 3.5-1.474 3.5-3.29v-23.42c0-1.817-1.568-3.29-3.5-3.29zm17 0c-1.933 0-3.5 1.473-3.5 3.29v23.42c0 1.817 1.566 3.29 3.5 3.29s3.5-1.474 3.5-3.29v-23.42c0-1.817-1.566-3.29-3.5-3.29zm16 0c-1.934 0-3.5 1.473-3.5 3.29v23.42c0 1.817 1.567 3.29 3.5 3.29 1.932 0 3.5-1.474 3.5-3.29v-23.42c0-1.817-1.567-3.29-3.5-3.29zm-65 40c-1.933 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.567 3.293 3.5 3.293s3.5-1.474 3.5-3.293V396.29c0-1.816-1.568-3.29-3.5-3.29zm17 0c-1.933 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.568 3.293 3.5 3.293 1.933 0 3.5-1.474 3.5-3.293V396.29c0-1.816-1.567-3.29-3.5-3.29zm15 0c-1.934 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.566 3.293 3.5 3.293 1.933 0 3.5-1.474 3.5-3.293V396.29c0-1.816-1.568-3.29-3.5-3.29zm17 0c-1.933 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.566 3.293 3.5 3.293s3.5-1.474 3.5-3.293V396.29c0-1.816-1.566-3.29-3.5-3.29zm16 0c-1.934 0-3.5 1.474-3.5 3.29v23.417c0 1.818 1.567 3.293 3.5 3.293 1.932 0 3.5-1.474 3.5-3.293V396.29c0-1.816-1.567-3.29-3.5-3.29z" />
                  <path d="M47.238 156.21c-1.31-6.942-7.422-12.21-14.74-12.21-4.94 0-9.543 2.47-12.316 6.46-4.298-.212-8.318 2-10.534 5.517-.208-.014-.416-.02-.626-.02-4.975 0-9.022 4.046-9.022 9.02C0 169.954 4.047 174 9.022 174H45.11c4.975 0 9.022-4.047 9.022-9.022 0-4.24-2.943-7.81-6.894-8.768zM45.11 167.4H9.02c-1.333 0-2.42-1.086-2.42-2.42 0-1.336 1.086-2.422 2.42-2.422.36 0 .71.082 1.044.242.873.42 1.886.435 2.77.042.887-.393 1.555-1.155 1.828-2.084.772-2.62 3.52-4.303 6.353-3.514 1.555.434 3.194-.32 3.878-1.783 1.377-2.95 4.362-4.86 7.605-4.86 4.622 0 8.382 3.76 8.398 8.37-.007.1-.013.19-.015.28-.02.99.39 1.93 1.13 2.58.74.65 1.74.93 2.71.78.16-.025.29-.04.4-.04 1.34 0 2.42 1.088 2.42 2.42 0 1.34-1.09 2.425-2.42 2.425zm134.482-41.864c-.324 0-.646.016-.964.048-2.43-4.055-7.032-6.598-11.915-6.254-3.033-4.52-8.176-7.33-13.7-7.33-8.16 0-14.954 5.952-16.27 13.74-4.416.923-7.743 4.844-7.743 9.528 0 5.367 4.366 9.732 9.733 9.732h40.86c5.367 0 9.733-4.366 9.733-9.732 0-5.365-4.367-9.732-9.734-9.732zm0 12.955h-40.86c-1.777 0-3.223-1.44-3.223-3.22 0-1.77 1.44-3.22 3.22-3.22.15 0 .32.02.52.05.96.16 1.94-.12 2.67-.76s1.14-1.57 1.11-2.54c-.01-.1-.01-.193-.02-.283 0-5.51 4.48-9.99 9.99-9.99 3.86 0 7.41 2.27 9.05 5.78.67 1.443 2.29 2.187 3.82 1.76 3.45-.962 6.84 1.093 7.782 4.306.27.915.927 1.667 1.8 2.054.873.386 1.872.37 2.732-.044.443-.214.91-.32 1.39-.32 1.777 0 3.223 1.443 3.223 3.22s-1.447 3.22-3.224 3.22z" />
                </g>
              </mask>
            </defs>
            <rect
              x="0"
              y="46"
              width="190"
              height="485"
              fill="#dbdbdb"
              mask="url(#mask)"
            />
            <rect
              x="0"
              y={531 - h}
              width="190"
              height={h}
              fill="#00989e"
              mask="url(#mask)"
            />
          </svg>
        );
      }}
    </Motion>
  );
};

export default ItineraryProgressMeter;

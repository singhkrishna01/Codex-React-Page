import React from "react";
import styled from "styled-components"

const TestBox = ({name, review, img, star}) => {
        let fields = [];
        for (let i = 1; i <= star; i++) {
          fields.push(            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>);
        }
  return (
        <Wrapper>
                <blockquote className="review rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="LStar flex items-center gap-4">
                                {/* IMAGE LOGO */}
                                <img
                                alt="Man"
                                src={`src/assets/clients/${img}.jpg`}
                                className="h-14 w-14 rounded-full object-cover"
                                />
                                <div>
                                {/* STARS */}
                                <div className="flex justify-center gap-0.5 text-green-500">
                                        {fields}
                                </div>
                                {/* NAME */}
                                <p className="mt-0.5 text-center text-lg font-medium text-gray-900">{name}</p>
                                </div>
                        </div>
                        {/* DESCRIPTION  */}
                        <p className="descrip mt-4 text-gray-700">
                                {review}
                        </p>
                </blockquote>

        </Wrapper>
  );
};

const Wrapper = styled.section`
.review{
        transition: all 0.3s ease-in-out;
}
.review:hover{
        transform: translateY(-20px);
}
@media only screen and (min-width: 768px) and (max-width: 905px){
        .LStar{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
        .descrip{
                text-align: center;
        }
}
@media only screen and (max-width: 424px){
        .LStar{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }
        .descrip{
                text-align: center;
        }
}
`;

export default TestBox;

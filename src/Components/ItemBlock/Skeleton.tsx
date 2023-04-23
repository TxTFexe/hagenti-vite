import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
    <ContentLoader 
    className="category-content__skeleton"
    speed={2}
    width={908}
    height={180}
    viewBox="0 0 908 180"
    backgroundColor="#454545"
    foregroundColor="#303030"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="908" height="180" />
  </ContentLoader>
)

export default Skeleton

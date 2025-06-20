const ShimmerCard = () => (
  <div className="shimmer-card">
    <div className="img-skeleton"></div>
    <div className="text-skeleton"></div>
    <div className="text-skeleton"></div>
    <div className="text-skeleton"></div>
    <div className="text-skeleton half-text-skeleton"></div>
    <div className="text-skeleton half-text-skeleton"></div>
  </div>
);

const Shimmer = () => {
  const shimmerCount = 8;
  return (
    <div className="shimmer-container">
      {Array.from({ length: shimmerCount }, (_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default Shimmer;

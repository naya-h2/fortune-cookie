import { useState } from 'react';

function ResultPage() {
  const [isLoading, setIsLoading] = useState(true);

  return <>{isLoading ? <div></div> : <div>ResultPage</div>}</>;
}

export default ResultPage;

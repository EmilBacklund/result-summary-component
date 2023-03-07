import Container from './components/layout/Container';
import ResultSection from './components/result/ResultSection';
import SummarySection from './components/summary/SummarySection';
import StatSummary from './components/summary/StatSummary';
import { useState } from 'react';

function calculateMedian(scores) {
  const sortedScores = scores.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedScores.length / 2);
  if (sortedScores.length % 2 === 0) {
    return (sortedScores[middleIndex - 1] + sortedScores[middleIndex]) / 2;
  } else {
    return sortedScores[middleIndex];
  }
}

function App() {
  const [scores, setScores] = useState([
    {
      bg: 'bg-redText',
      icon: '/images/icon-reaction.svg',
      adjective: 'Reaction',
      textColor: 'text-redText',
      score: 80,
    },
    {
      bg: 'bg-yellowText',
      icon: '/images/icon-memory.svg',
      adjective: 'Memory',
      textColor: 'text-yellowText',
      score: 92,
    },
    {
      bg: 'bg-greenText',
      icon: '/images/icon-verbal.svg',
      adjective: 'Verbal',
      textColor: 'text-greenText',
      score: 61,
    },
    {
      bg: 'bg-blueText',
      icon: '/images/icon-visual.svg',
      adjective: 'Visual',
      textColor: 'text-blueText',
      score: 73,
    },
  ]);

  const median = Math.floor(calculateMedian(scores.map((score) => score.score)));

  return (
    <Container>
      <ResultSection score={median}></ResultSection>
      <SummarySection>
        {scores.map((stat, index) => (
          <StatSummary key={index} {...stat} />
        ))}
      </SummarySection>
    </Container>
  );
}

export default App;

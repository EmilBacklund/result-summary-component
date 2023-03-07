import Container from './components/layout/Container';
import ResultSection from './components/result/ResultSection';
import SummarySection from './components/summary/SummarySection';
import StatSummary from './components/summary/StatSummary';

function App() {
  return (
    <Container>
      <ResultSection></ResultSection>
      <SummarySection>
        <StatSummary
          bg='bg-redText'
          icon='/images/icon-reaction.svg'
          adjective='Reaction'
          textColor='text-redText'
          score='80'
        />
        <StatSummary
          bg='bg-yellowText'
          icon='/images/icon-memory.svg'
          adjective='Memory'
          textColor='text-yellowText'
          score='92'
        />
        <StatSummary
          bg='bg-greenText'
          icon='/images/icon-verbal.svg'
          adjective='Verbal'
          textColor='text-greenText'
          score='61'
        />
        <StatSummary
          bg='bg-blueText'
          icon='/images/icon-visual.svg'
          adjective='Visual'
          textColor='text-blueText'
          score='73'
        />
      </SummarySection>
    </Container>
  );
}

export default App;

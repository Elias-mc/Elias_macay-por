import Footer from '../components/Footer';
import GithubActivity from '../components/GithubAcivity';
import Perfil from '../components/Perfil';
import TechMarquee from '../components/TechMarquee';
import OutsideIDE from './OutsideIDE';

function Home_page() {
  return (
    <>
      <Perfil />
      <OutsideIDE />
      <GithubActivity />
      <TechMarquee />
      <Footer />
    </>
  );
}
export default Home_page;

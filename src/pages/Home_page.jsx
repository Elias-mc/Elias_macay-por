import GithubActivity from '../components/GithubAcivity';
import Certifications from '../components/Home/Certifications';
import Footer from '../components/Home/Footer';
import OutsideIDE from '../components/Home/OutsideIDE';
import Perfil from '../components/Perfil';
import TechMarquee from '../components/TechMarquee';

function Home_page() {
  return (
    <>
      <Perfil />
      <TechMarquee />
      <Certifications />
      <GithubActivity />
      <OutsideIDE />

      <Footer />
    </>
  );
}
export default Home_page;

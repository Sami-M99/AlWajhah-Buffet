import { useTranslation } from "react-i18next";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import logo from "../assets/logo.png";
import p3 from "../assets/payment3.svg";
import p4 from "../assets/payment4.svg";

function Footer() {
  const {t} = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] text-white py-7">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4 text-center md:text-start">
            <img 
              src={logo}
              alt="Rydan Logo" 
              className="w-40 transition-transform duration-300 hover:scale-105 mx-auto md:mx-0"
            />
            <p className="text-lg leading-relaxed">{t("footer.mission")}</p>
          </div>
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-xl font-bold text-[#ffea13]">{t("footer.contact")}</h3>
            <p>{t("footer.address")}</p>
            <p>{t("footer.phone")}: 966531833995+</p>
          </div>
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-xl font-bold text-[#ffea13]">{t("footer.follow_us")}</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#ffea13] transition-colors duration-300 hover:scale-110 transform"><FaFacebookSquare /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#ffea13] transition-colors duration-300 hover:scale-110 transform"><FaTwitterSquare /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#ffea13] transition-colors duration-300 hover:scale-110 transform"><FaInstagram /></a>
            </div>
            <div className="mt-8 flex gap-3 justify-center md:justify-start">
              <img src={p3} alt="Payment method" className="h-8" />
              <img src={p4} alt="Payment method" className="h-8" />
            </div>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white border-opacity-10 text-center space-y-2">
          <p>&copy; {year} {t("footer.copy_write_parg")}</p>
          <p>
            {t("footer.developed_by")}:{" "}
            <a 
              href="https://www.nano2soft.com/ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ffea13] hover:text-white hover:underline transition-colors duration-300 font-bold"
            >
              {t("footer.developed_company")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
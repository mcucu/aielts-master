
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 px-6 md:px-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-medium text-lg">AIELTS Master</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Platform latihan menulis untuk persiapan ujian IELTS, dirancang untuk membantu Anda meningkatkan keterampilan menulis.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Menu</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/practice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Latihan
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tentang
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Kontak</h3>
            <p className="text-sm text-muted-foreground">
              Punya pertanyaan atau saran? Hubungi kami di support@aielts.app
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AIELTS Master. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Syarat Penggunaan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

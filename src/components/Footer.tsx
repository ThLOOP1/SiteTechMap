import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Youtube,
  Send,
  Zap
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-b from-secondary/20 to-background border-t border-border/50">
      {/* Newsletter Section */}
      <div className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Newsletter TechMap</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Fique por dentro das novidades
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Receba as últimas oportunidades de eventos, vagas e cursos diretamente no seu e-mail. 
              Sem spam, apenas conteúdo relevante.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Inscrever
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Mais de 10.000 profissionais já recebem nossa newsletter
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    TechMap
                  </h1>
                  <p className="text-xs text-muted-foreground">Future of Technology</p>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Conectando profissionais de tecnologia com as melhores oportunidades do mercado. 
                Construindo o futuro da tech, uma conexão por vez.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">contato@techmap.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">São Luís, MA - Brasil</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground">Links Rápidos</h4>
              <div className="space-y-3">
                <a href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
                <a href="#eventos" className="block text-muted-foreground hover:text-primary transition-colors">
                  Eventos
                </a>
                <a href="#vagas" className="block text-muted-foreground hover:text-primary transition-colors">
                  Vagas
                </a>
                <a href="#cursos" className="block text-muted-foreground hover:text-primary transition-colors">
                  Cursos
                </a>
                <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground">Serviços</h4>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Busca de Talentos
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Consultoria Tech
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Treinamentos
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Mentoria
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Certificações
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-foreground">Recursos</h4>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Blog Tech
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Guia de Carreira
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Tendências Tech
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Salários Tech
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Suporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-20" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 TechMap. Todos os direitos reservados. Construído com ❤️ para a comunidade tech.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
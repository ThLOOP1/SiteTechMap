import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "DevOps Brasil Conference",
    description: "Aprenda as melhores práticas de DevOps com especialistas do mercado",
    date: "2025-02-20",
    time: "09:00",
    location: "São Luís, MA",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc1NjI3MDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "DevOps",
    status: "open"
  },
  {
    id: 2,
    title: "AI & Machine Learning Meetup",
    description: "Explorando o futuro da inteligência artificial e aprendizado de máquina",
    date: "2025-02-25",
    time: "19:00",
    location: "Raposa, MA",
    attendees: 150,
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc1NjI3MDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "AI/ML",
    status: "filling"
  },
  {
    id: 3,
    title: "Blockchain & Web3 Summit",
    description: "Descubra as tendências e oportunidades no mundo Web3",
    date: "2025-03-05",
    time: "14:00",
    location: "São José de Ribamar, MA",
    attendees: 200,
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc1NjI3MDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Blockchain",
    status: "open"
  },
  {
    id: 4,
    title: "Mobile Development Workshop",
    description: "Desenvolvimento mobile moderno com React Native e Flutter",
    date: "2025-03-12",
    time: "10:00",
    location: "Paço do Lumiar, MA",
    attendees: 80,
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc1NjI3MDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mobile",
    status: "open"
  },
  {
    id: 5,
    title: "Cybersecurity & Privacy Tech",
    description: "Segurança digital e proteção de dados na era moderna",
    date: "2025-03-18",
    time: "16:00",
    location: "São Luís, MA",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc1NjI3MDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Security",
    status: "filling"
  },
  {
    id: 6,
    title: "Cloud Computing Excellence",
    description: "Arquitetura e estratégias avançadas para computação em nuvem",
    date: "2025-03-25",
    time: "13:00",
    location: "Raposa, MA",
    attendees: 180,
    image: "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc1NjI3MDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Cloud",
    status: "open"
  }
];

export function EventsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'short' 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500/20 text-green-400';
      case 'filling': return 'bg-yellow-500/20 text-yellow-400';
      case 'full': return 'bg-red-500/20 text-red-400';
      default: return 'bg-primary/20 text-primary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Vagas Abertas';
      case 'filling': return 'Últimas Vagas';
      case 'full': return 'Esgotado';
      default: return 'Disponível';
    }
  };

  return (
    <section id="eventos" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Próximos Eventos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Eventos em Destaque
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participe dos melhores eventos de tecnologia do Brasil. Networking, aprendizado e 
            oportunidades de carreira em um só lugar.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="group hover:scale-105 transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
              <div className="relative">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(event.status)}>
                    {getStatusText(event.status)}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                    <Clock className="h-4 w-4 text-primary ml-4" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.attendees}+ participantes esperados</span>
                  </div>
                </div>

                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  variant="outline"
                >
                  Inscrever-se
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Ver Todos os Eventos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
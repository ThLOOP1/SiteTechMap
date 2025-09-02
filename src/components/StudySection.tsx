import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Clock, Users, Star, BookOpen, Award, ArrowRight } from "lucide-react";

const studyOpportunities = [
  {
    id: 1,
    title: "Mestrado em Ciência da Computação",
    institution: "Universidade Tech SP",
    type: "Mestrado",
    duration: "24 meses",
    level: "Pós-graduação",
    students: 120,
    rating: 4.9,
    price: "R$ 1.200/mês",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHN0dWR5fGVufDF8fHx8MTc1NjI5ODA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    areas: ["IA", "Machine Learning", "Big Data"],
    featured: true,
    nextStart: "Março 2025",
    modality: "Presencial"
  },
  {
    id: 2,
    title: "Bootcamp Full Stack Development",
    institution: "CodeAcademy Pro",
    type: "Bootcamp",
    duration: "6 meses",
    level: "Intensivo",
    students: 450,
    rating: 4.8,
    price: "R$ 800/mês",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHN0dWR5fGVufDF8fHx8MTc1NjI5ODA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    areas: ["React", "Node.js", "MongoDB"],
    featured: true,
    nextStart: "Fevereiro 2025",
    modality: "Online"
  },
  {
    id: 3,
    title: "Especialização em DevOps",
    institution: "TechInstitute",
    type: "Especialização",
    duration: "18 meses",
    level: "Pós-graduação",
    students: 80,
    rating: 4.7,
    price: "R$ 950/mês",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHN0dWR5fGVufDF8fHx8MTc1NjI5ODA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    areas: ["Docker", "Kubernetes", "AWS"],
    featured: false,
    nextStart: "Abril 2025",
    modality: "Híbrido"
  },
  {
    id: 4,
    title: "Doutorado em Inteligência Artificial",
    institution: "Instituto de IA Avançada",
    type: "Doutorado",
    duration: "48 meses",
    level: "Doutorado",
    students: 30,
    rating: 5.0,
    price: "Bolsa integral",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHN0dWR5fGVufDF8fHx8MTc1NjI5ODA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    areas: ["Deep Learning", "NLP", "Computer Vision"],
    featured: true,
    nextStart: "Agosto 2025",
    modality: "Presencial"
  },
  {
    id: 5,
    title: "Curso Mobile Development",
    institution: "MobileTech Academy",
    type: "Curso",
    duration: "4 meses",
    level: "Intermediário",
    students: 200,
    rating: 4.6,
    price: "R$ 450/mês",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHN0dWR5fGVufDF8fHx8MTc1NjI5ODA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    areas: ["React Native", "Flutter", "Swift"],
    featured: false,
    nextStart: "Janeiro 2025",
    modality: "Online"
  },
  {
    id: 6,
    title: "MBA em Gestão de TI",
    institution: "Business Tech School",
    type: "MBA",
    duration: "20 meses",
    level: "Pós-graduação",
    students: 90,
    rating: 4.8,
    price: "R$ 1.500/mês",
    image: "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib290Y2FtcCUyMHN0dWR5fGVufDF8fHx8MTc1NjI5ODA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    areas: ["Gestão", "Liderança", "Inovação"],
    featured: false,
    nextStart: "Maio 2025",
    modality: "Híbrido"
  }
];

export function StudySection() {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mestrado': return 'bg-purple-500/20 text-purple-400';
      case 'doutorado': return 'bg-indigo-500/20 text-indigo-400';
      case 'bootcamp': return 'bg-orange-500/20 text-orange-400';
      case 'especialização': return 'bg-green-500/20 text-green-400';
      case 'mba': return 'bg-red-500/20 text-red-400';
      case 'curso': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-primary/20 text-primary';
    }
  };

  const getModalityIcon = (modality: string) => {
    switch (modality.toLowerCase()) {
      case 'online': return '💻';
      case 'presencial': return '🏫';
      case 'híbrido': return '🔄';
      default: return '📚';
    }
  };

  return (
    <section id="cursos" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Educação e Desenvolvimento</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Oportunidades de Estudo
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invista no seu futuro com os melhores cursos, especializações e programas de pós-graduação 
            em tecnologia do mercado.
          </p>
        </div>

        {/* Study Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {studyOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className={`group hover:scale-105 transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm ${opportunity.featured ? 'gradient-border' : ''}`}>
              <div className={opportunity.featured ? 'bg-card/50 backdrop-blur-sm rounded-lg' : ''}>
                <div className="relative">
                  <ImageWithFallback
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTypeColor(opportunity.type)}>
                      {opportunity.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm">
                      {getModalityIcon(opportunity.modality)} {opportunity.modality}
                    </Badge>
                  </div>
                  {opportunity.featured && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-yellow-500/90 text-yellow-900">
                        <Star className="h-3 w-3 mr-1" />
                        Destaque
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {opportunity.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>{opportunity.institution}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{opportunity.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{opportunity.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{opportunity.students} alunos</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {opportunity.level}
                      </Badge>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Áreas de foco:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.areas.map((area, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Próxima turma:</span>
                        <div className="font-medium text-primary">{opportunity.nextStart}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-400">{opportunity.price}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <Award className="mr-2 h-4 w-4" />
                      Inscrever-se
                    </Button>
                    <Button variant="outline" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Study Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="h-6 w-6 text-purple-400" />
            </div>
            <h4 className="font-medium mb-1">Pós-graduação</h4>
            <p className="text-sm text-muted-foreground">Mestrado & Doutorado</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-orange-400" />
            </div>
            <h4 className="font-medium mb-1">Bootcamps</h4>
            <p className="text-sm text-muted-foreground">Formação intensiva</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-green-400" />
            </div>
            <h4 className="font-medium mb-1">Especializações</h4>
            <p className="text-sm text-muted-foreground">Foco específico</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="font-medium mb-1">Cursos Online</h4>
            <p className="text-sm text-muted-foreground">Flexibilidade total</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Explorar Todas as Oportunidades
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
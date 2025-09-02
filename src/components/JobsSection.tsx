import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Briefcase, MapPin, Clock, DollarSign, Building, ArrowRight, Star } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "São Luís, MA",
    type: "Full-time",
    salary: "R$ 15.000 - R$ 20.000",
    experience: "5+ anos",
    skills: ["React", "Node.js", "AWS", "Docker"],
    featured: true,
    postedAt: "2 dias atrás",
    applicants: 45
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "CloudFirst Inc",
    location: "Raposa, MA",
    type: "Full-time",
    salary: "R$ 12.000 - R$ 18.000",
    experience: "3+ anos",
    skills: ["Kubernetes", "Terraform", "Jenkins", "Azure"],
    featured: false,
    postedAt: "1 dia atrás",
    applicants: 32
  },
  {
    id: 3,
    title: "Mobile Developer React Native",
    company: "StartupXYZ",
    location: "São José de Ribamar, MA",
    type: "Full-time",
    salary: "R$ 10.000 - R$ 15.000",
    experience: "3+ anos",
    skills: ["React Native", "TypeScript", "Firebase", "Redux"],
    featured: true,
    postedAt: "3 dias atrás",
    applicants: 28
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "AI Innovations",
    location: "Paço do Lumiar, MA",
    type: "Full-time",
    salary: "R$ 14.000 - R$ 22.000",
    experience: "4+ anos",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    featured: false,
    postedAt: "4 dias atrás",
    applicants: 67
  },
  {
    id: 5,
    title: "Frontend Developer Vue.js",
    company: "DigitalAgency Pro",
    location: "São Luís, MA",
    type: "Full-time",
    salary: "R$ 8.000 - R$ 12.000",
    experience: "2+ anos",
    skills: ["Vue.js", "Nuxt.js", "CSS3", "Figma"],
    featured: false,
    postedAt: "5 dias atrás",
    applicants: 23
  },
  {
    id: 6,
    title: "Cybersecurity Specialist",
    company: "SecureBank Corp",
    location: "Raposa, MA",
    type: "Full-time",
    salary: "R$ 16.000 - R$ 25.000",
    experience: "5+ anos",
    skills: ["Penetration Testing", "CISSP", "ISO 27001", "Firewall"],
    featured: true,
    postedAt: "1 semana atrás",
    applicants: 89
  }
];

export function JobsSection() {
  return (
    <section id="vagas" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Oportunidades de Carreira</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Vagas em Destaque
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre as melhores oportunidades no mercado de tecnologia. 
            Conecte-se com empresas inovadoras e acelere sua carreira.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {jobs.map((job) => (
            <Card key={job.id} className={`group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm ${job.featured ? 'gradient-border' : ''}`}>
              <div className={job.featured ? 'bg-card/50 backdrop-blur-sm rounded-lg' : ''}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                        {job.title}
                        {job.featured && <Star className="h-5 w-5 text-yellow-400 fill-current" />}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Building className="h-4 w-4 text-primary" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <Badge variant={job.featured ? "default" : "secondary"}>
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{job.postedAt}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-medium text-green-400">{job.salary}</span>
                      </div>
                      <span className="text-muted-foreground">{job.experience} experiência</span>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Tecnologias:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {job.applicants} candidatos aplicaram
                      </span>
                      {job.featured && (
                        <Badge className="bg-yellow-500/20 text-yellow-400">
                          Vaga Premium
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Candidatar-se
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Vagas Ativas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Empresas Parceiras</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2.5k+</div>
            <div className="text-muted-foreground">Profissionais Conectados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Taxa de Sucesso</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group mr-4"
          >
            Ver Todas as Vagas
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300"
          >
            Criar Alerta de Vagas
          </Button>
        </div>
      </div>
    </section>
  );
}
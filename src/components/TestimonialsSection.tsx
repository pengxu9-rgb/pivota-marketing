import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Pivota streamlined our agent payments, saving time and reducing errors.",
    company: "Company A",
    role: "Chief Financial Officer",
    logo: "🚀"
  },
  {
    quote: "Integration was seamless, and the AI insights helped optimize our operations.",
    company: "Company B", 
    role: "Head of Operations",
    logo: "⚡"
  },
  {
    quote: "A futuristic solution that makes agent management simple and reliable.",
    company: "Company C",
    role: "Technology Director",
    logo: "🌟"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our <span className="text-gradient-primary">Partners</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how Pivota is transforming businesses worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.company}
              className="card-feature relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              <div className="space-y-6">
                <blockquote className="text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xl">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.company}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
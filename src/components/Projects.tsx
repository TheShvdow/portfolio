import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Plateforme de Reseau Sociale ",
    description: "Réseau social destiné aux tailleurx, vendeurs de merceries et aux clients avec backend Nodejs et frontend React",
    tech: ["NodeJs", "React", "PostgreSQL", "Docker","Swagger"],
    image: "src/images/mirror_model.png",
    href: 'https://github.com/TheShvdow/miroir-model'
  },
  {
    title: "Application Mobile Money",
    description: "Application mobile multiplateforme développée avec Flutter",
    tech: ["Flutter","Laravel", "Firebase", "REST API"],
    image: "src/images/Naffa-money.png",
    href : "https://github.com/TheShvdow/naffa_money_flutter"
  },
  {
    title: "Gestion des Dettes",
    description: "Solution de gestion de dettes d'une boutique avec possibilité de suivi fréquentielle ",
    tech: ["REST API", "Firebase","POSTGRESQL", "Laravel" ,"WebSocket","Swagger"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    href: "https://github.com/TheShvdow/gestion_dette_laravel"
  }
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projets Réalisés</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
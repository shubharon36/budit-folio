import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseStudyModal from './CaseStudyModal';
import { caseStudies } from '../caseStudiesData'; 

const SuccessStories = () => {
  useScrollReveal();
  const [filter, setFilter] = useState('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const handleFilter = (f) => setFilter(f);
  
  const stories = [
    { cat: 'launch', name: 'SafeWay Logistics', desc: 'Supported the foundational phase with clear roadmaps, operational structure, and digital presence for launch.' },
    { cat: 'brand', name: 'The Daily Grind', desc: 'Enabled strong on-ground brand engagement through event-led collaborations backed by data insights.' },
    { cat: 'lead', name: 'Quosult Business Sols', desc: 'Delivered qualified global leads by managing the full journey from cold outreach to closure, driving new acquisitions.' },
    { cat: 'partner', casestudy: 'navratri', name: 'Radhe Events × Sparkle Event', desc: 'Managed end-to-end partner outreach and coordination to ensure a successfully executed event.' },
    { cat: 'launch', casestudy: 'parking', name: 'Entire Parking Solutions', desc: 'Provided end-to-end consultancy by leveraging strong networks to enable smooth operations and sustained growth.' },
    { cat: 'brand', casestudy: 'quirky', name: 'Quirky Jewellery', desc: 'Provided high-end consultation across digital marketing and photography, supported by market insight.' },
    { cat: 'partner', casestudy: 'homies', name: 'Homyns', desc: 'Supported channel partner collaborations, brand image development, and access to skilled manpower to manage client demand effectively.' },
    { cat: 'lead', name: 'C12', desc: 'Enabled idea validation, service setup, and lead generation, while connecting them with incubators and pitch support.' },
    { cat: 'lead', casestudy: 'uspace', name: 'The U Space', desc: 'Drove strategic collaborations with builders, developers, and channel partners, delivering qualified leads for growth and expansion.' },
    { cat: 'launch', casestudy: 'amora', name: 'Amora Light', desc: 'Built a holistic wellness brand from scratch — identity, positioning, and digital presence for a first-generation entrepreneur.' },
    { cat: 'brand', casestudy: 'comfort', name: 'Comfort Mattress', desc: 'Expanded a 24-year legacy brand into new retail and B2B markets through digital optimization and strategic collaborations.' },
    { cat: 'content', casestudy: 'cleon', name: 'Cleon', desc: 'Built a strong content foundation across digital and marketing assets for a smart electric appliances brand launch.' },
    { cat: 'brand', casestudy: 'mani', name: 'Mani Bhadra Motors', desc: 'Drove organic growth for a local automotive brand — 150+ followers in 20 days, zero paid ads, real customer footfall.' },
    { cat: 'lead', casestudy: 'globalit', name: 'Qonsult', desc: 'Acted as outsourced BDE team for a Dubai-based IT company, closing projects worth $5K–$50K across global markets.' },
    { cat: 'launch', casestudy: 'qaautomation', name: 'Verdect', desc: 'End-to-end brand building for a new QA and bug testing company — from identity to lead generation infrastructure.' },
    { cat: 'content', casestudy: 'cafecontent', name: 'Coffea', desc: 'Served as creative and content strategy partner alongside the marketing agency for a café brand\'s digital communication.' },
    { cat: 'launch', casestudy: 'cafelaunch', name: 'Titli', desc: 'Leading end-to-end brand development, launch strategy, and business consultation for a newly constructed café.' },
    { cat: 'content', casestudy: 'fmcg', name: 'Simply Origin', desc: 'Strategic content across packaging, Amazon A+, website, and marketing collateral for a manufacturer launching its own consumer brand.' },
    { cat: 'content', casestudy: 'jewellerydigital', name: 'Chumunda Jewellery', desc: 'Strengthening digital presence and building a premium brand identity across social media for a decade-old jewellery business.' },
  ];

  const getTag = (cat) => {
    switch(cat) {
      case 'launch': return 'Launch & Ops';
      case 'lead': return 'Lead Generation';
      case 'brand': return 'Brand & Engagement';
      case 'content': return 'Content & Strategy';
      case 'partner': return 'Partnerships';
      default: return '';
    }
  };

  const filtered = filter === 'all' ? stories : stories.filter(s => s.cat === filter);

  return (
    <>
      <section className="stories section-pad" id="stories">
        <div className="container">
          <div className="stories-head reveal">
            <div>

              <h2 className="section-title">Brands we've helped <em>build.</em></h2>
            </div>
            <p className="right">From foundational launches to qualified global leads — a snapshot of the partnerships we've shaped across industries.</p>
          </div>

          <div className="stories-filter reveal">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All Work</button>
            <button className={`filter-btn ${filter === 'launch' ? 'active' : ''}`} onClick={() => handleFilter('launch')}>Launch &amp; Ops</button>
            <button className={`filter-btn ${filter === 'lead' ? 'active' : ''}`} onClick={() => handleFilter('lead')}>Lead Generation</button>
            <button className={`filter-btn ${filter === 'brand' ? 'active' : ''}`} onClick={() => handleFilter('brand')}>Brand &amp; Engagement</button>
            <button className={`filter-btn ${filter === 'content' ? 'active' : ''}`} onClick={() => handleFilter('content')}>Content &amp; Strategy</button>
            <button className={`filter-btn ${filter === 'partner' ? 'active' : ''}`} onClick={() => handleFilter('partner')}>Partnerships</button>
          </div>

          <div className="stories-grid reveal-stagger">
            {filtered.map((story, i) => (
              <div 
                key={i} 
                className={`story-card ${story.casestudy ? 'has-casestudy' : ''}`} 
                onClick={() => story.casestudy && setActiveCaseStudy(caseStudies[story.casestudy])}
              >
                <span className="story-tag">{getTag(story.cat)}</span>
                <h3 className="story-name">{story.name}</h3>
                <p className="story-desc">{story.desc}</p>
                {story.casestudy && <span className="cs-hint">View Case Study →</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CaseStudyModal activeCaseStudy={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
    </>
  );
};

export default SuccessStories;

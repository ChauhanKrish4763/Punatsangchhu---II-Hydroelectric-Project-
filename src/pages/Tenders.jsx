import React from 'react';
import HeroSection from '../pages/HeroSection.jsx';
import '../styles/Tenders.css';

const TenderPage = () => {
  const tenderNotices = [
    {
      id: 1,
      type: 'NOTICE-I',
      title: 'Supply of Submersible Pumps',
      description: 'The Punatsangchhu-II Hydroelectric Project Authority (PHPA-II) is pleased to invite "sealed Bids" from Bhutanese/Indian Supplier for \'Supply of Submersible Pumps\'.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/08/Detailed-NIT_Supply-of-Submersible-Pumps-1.pdf',
      linkText: 'Notice Inviting Tender (Submersible Pumps)',
      category: 'equipment'
    },
    {
      id: 2,
      type: 'NOTICE-I',
      title: 'Painting of CGI Sheet Roofing',
      description: 'Sealed Bids are hereby invited for and on behalf of Punatsangchhu-II Hydroelectric Project Authority (PHPA-II) from all the eligible Bhutanese Firms for the work "Painting of CGI Sheet Roofing for PHPA-II Colony at Pheytakha, Wangdue" as per the details given below.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/08/NIT.pdf',
      linkText: 'Notice Inviting Tender (CGI SHEET)',
      category: 'construction'
    },
    {
      id: 3,
      type: 'NOTICE-II',
      title: 'Construction of Dynamic Rockfall Barrier',
      description: 'The Punatsangchhu-II Hydroelectric Project Authority (PHPA-II) is pleased to invite "Sealed Bids" from reputed, experienced and financially sound Bhutanese/ Indian bidders for the work \'Construction of ETAG certified Class A Dynamic Rockfall Barrier at Dam Site of the Punatsangchhu-II Hydroelectric Project\'.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/08/NIT-for-Rockfall-barrier.pdf',
      linkText: 'Notice Inviting Tender (ROCKFALL)',
      category: 'construction'
    },
    {
      id: 4,
      type: 'AUCTION NOTICE',
      title: 'Vehicle Auction',
      description: 'Sealed Bids are invited by the Chief Engineer (Procurement & Contracts Wing), Punatsangchhu-ll Hydroelectric Project Authority (PHPA-II), Bjimthangkha, Wangdue, Bhutan from Bhutanese Bidders for Auction of Vehicle on "AS IS WHERE IS BASIS" and as per the price schedule provided.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/08/NIT-for-Auction-of-Vehicle.pdf',
      linkText: 'Auction Notice (Scorpio)',
      category: 'auction'
    },
    {
      id: 5,
      type: 'NOTICE-III',
      title: 'Supply of Tubeless Tyres and Tyres with Tube & Flap',
      description: 'Sealed Bids are invited by the Chief Engineer (Procurement & Contracts Wing), Punatsangchhu-ll Hydroelectric Project Authority (PHPA-II), Bjimthangkha, Wangdue, Bhutan from Bhutanese/Indian Suppliers for "Supply of Tubeless Tyres and Tyres with Tube & Flap".',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/07/NIT-tyre.pdf',
      linkText: 'Notice Inviting Tender (TYRE)',
      category: 'equipment'
    },
    {
      id: 6,
      type: 'CORRIGENDUM-I (AC)',
      title: 'Corrigendum for AC Equipment',
      description: 'Subsequent to queries raised by the bidder(s) on the reference Tender No. PHPA-II-CE(P&C)/O&M Circle/2025/02 the Following clarifications are being provided to all the prospective bidders as mentioned in the notice.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/06/Corrigendum-AC.pdf',
      linkText: 'CORRIGENDUM (AC)',
      category: 'corrigendum'
    },
    {
      id: 7,
      type: 'NOTICE-IV',
      title: 'Supply and Installation of Acoustic Cabins',
      description: 'Sealed Bids are hereby invited for and on behalf of Punatsangchhu-II Hydroelectric Project Authority (PHPA-II) from all the eligible firms for the work Supply and Installation of Acoustic Cabins in Power House at PHPA-II Site as per details given below.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/06/NIT-Aquastic-Cabin.pdf',
      linkText: 'Notice Inviting Tender (Acoustic Cabin)',
      category: 'equipment'
    },
    {
      id: 8,
      type: 'CORRIGENDUM-I, II & III',
      title: 'ICT Equipment Corrigendums',
      description: 'The following Corrigendum to the NIT No. PHPA-II-SE(P&C)-ICT/NIT-04/2025 for the "Supply of ICT EQUIPMENT" is hereby issued as under and shall form an integral part of the Tender Document.',
      downloadLinks: [
        {
          url: 'http://phpa2.gov.bt/wp-content/uploads/2025/05/Corrigendum1-of-ICT-Equipt.pdf',
          text: 'CORRIGENDUM-I (ICT Equipment)'
        },
        {
          url: 'http://phpa2.gov.bt/wp-content/uploads/2025/05/Corrigendum-2.pdf',
          text: 'CORRIGENDUM-II (ICT Equipment)'
        },
        {
          url: 'http://phpa2.gov.bt/wp-content/uploads/2025/05/Corrigendum3.pdf',
          text: 'CORRIGENDUM-III (ICT Equipment)'
        }
      ],
      category: 'corrigendum'
    },
    {
      id: 9,
      type: 'CORRIGENDUM-I',
      title: 'Silt Flushing Gates - Hydraulic Oil',
      description: 'The following Corrigendum to the NIT No. PHPA-II-SE(P&C)-c-1/NIT-03/2025 for the Supply of: Supply of "Hydraulic Oil for Power Pack of Sluice Spillway Radial Gates and Silt Flushing Gates" is hereby issued as under and shall form an integral part of the Tender Document.',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/05/Corrigendum1.pdf',
      linkText: 'CORRIGENDUM (Hydraulic Oil)',
      category: 'corrigendum'
    },
    {
      id: 10,
      type: 'NOTICE-IV',
      title: 'Supply of ICT Equipment',
      description: 'Sealed Bids are invited by the Chief Engineer (Procurement & Contracts Wing), Punatsangchhu-ll Hydroelectric Project Authority (PHPA-II), Bjimthangkha, Wangdue, Bhutan from Bhutanese/Indian Suppliers for "Supply of ICT Equipment".',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/05/NIT-for-ICT.pdf',
      linkText: 'Notice Inviting Tender (ICT Equipment)',
      category: 'equipment'
    },
    {
      id: 11,
      type: 'NOTICE-V',
      title: 'Supply of Hydraulic Oil',
      description: 'Sealed Bids are invited by the Chief Engineer (Procurement & Contracts Wing), Punatsangchhu-ll Hydroelectric Project Authority (PHPA-II), Bjimthangkha, Wangdue, Bhutan from Bhutanese/Indian Suppliers for "Supply Hydraulic Oil for Power Pack of Sluice Spillway Radial Gates and Silt Flushing Gates".',
      downloadLink: 'http://phpa2.gov.bt/wp-content/uploads/2025/05/NIT-for-Hydraulic-Oil.pdf',
      linkText: 'Notice Inviting Tender (Hydraulic Oil)',
      category: 'equipment'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'equipment':
        return 'equipment';
      case 'construction':
        return 'construction';
      case 'auction':
        return 'auction';
      case 'corrigendum':
        return 'corrigendum';
      default:
        return 'default';
    }
  };

  const renderDownloadSection = (notice) => {
    // Handle multiple download links
    if (notice.downloadLinks && notice.downloadLinks.length > 0) {
      return (
        <div className="download-section">
          <h4>Download Documents:</h4>
          <div className="multiple-downloads">
            {notice.downloadLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="download-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      );
    }
    
    // Handle single download link - FIXED: Now uses same structure as multiple
    if (notice.downloadLink && notice.linkText) {
      return (
        <div className="download-section">
          <h4>Download Document:</h4>
          <div className="multiple-downloads">
            <a
              href={notice.downloadLink}
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {notice.linkText}
            </a>
          </div>
        </div>
      );
    }
    
    // No download links available
    return (
      <div className="download-section">
        <h4>Documents:</h4>
        <p className="no-documents">No documents available for download</p>
      </div>
    );
  };

  return (
    <div className="tender-page">
      <HeroSection title="Tenders" />
      
      <div className="tender-container">
        <div className="tender-grid">
          {tenderNotices.map((notice) => (
            <div key={notice.id} className={`tender-card ${getCategoryColor(notice.category)}`}>
              <div className="tender-card-header">
                <div className="tender-type-badge">
                  <span className="tender-type">{notice.type}</span>
                </div>
              </div>
              
              <div className="tender-card-content">
                <h3 className="tender-title">{notice.title}</h3>
                <p className="tender-description">{notice.description}</p>
              </div>

              <div className="tender-card-footer">
                {renderDownloadSection(notice)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenderPage;

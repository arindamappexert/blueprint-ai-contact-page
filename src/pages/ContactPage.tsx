import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { RetroGrid } from '@/components/magicui/retro-grid';

export function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-background via-background/95 to-background/90">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <RetroGrid
            className="opacity-[0.08]"
            angle={65}
            cellSize={60}
            darkLineColor="gray"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0 pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              How can we help?
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/90">
              Get in touch with our sales and support teams for demos, onboarding support, or product questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
            {/* Left Column */}
            <div>
              {/* Sales */}
              <div className="mb-14">
                <h2 className="text-lg font-medium mb-2.5">Sales</h2>
                <p className="text-muted-foreground/90 text-sm mb-4 leading-relaxed">
                  Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
                </p>
                <Link to="/demo">
                  <Button size="sm" variant="default" className="h-9 px-4 rounded-md">
                    Talk to sales
                  </Button>
                </Link>
              </div>

              {/* Help & Support */}
              <div className="mb-14">
                <h2 className="text-lg font-medium mb-2.5">Help & support</h2>
                <p className="text-muted-foreground/90 text-sm mb-4 leading-relaxed">
                  Ask product questions, report problems, or leave feedback.
                </p>
                <Link to="mailto:support@sentinow.io">
                  <Button size="sm" variant="default" className="h-9 px-4 rounded-md">
                    Contact support
                  </Button>
                </Link>
              </div>

              {/* Community */}
              <div>
                <h2 className="text-lg font-medium mb-2.5">Join the community</h2>
                <p className="text-muted-foreground/90 text-sm mb-4 leading-relaxed">
                  More than 10,000 users share questions and best practices in our Slack community.
                </p>
                <a href="https://slack.sentinow.io" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="default" className="h-9 px-4 rounded-md">
                    Join Slack
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* General Communication */}
              <div className="mb-14">
                <h2 className="text-lg font-medium mb-2.5">General communication</h2>
                <p className="text-muted-foreground/90 text-sm mb-4 leading-relaxed">
                  For other queries, please get in touch with us via email.
                </p>
                <a 
                  href="mailto:hello@sentinow.io" 
                  className="text-primary hover:underline font-medium"
                >
                  hello@sentinow.io
                </a>
              </div>

              {/* Documentation */}
              <div className="mb-14">
                <h2 className="text-lg font-medium mb-2.5">Documentation</h2>
                <p className="text-muted-foreground/90 text-sm mb-4 leading-relaxed">
                  Get an overview of our features, integrations, and how to use them.
                </p>
                <Link to="/docs">
                  <Button size="sm" variant="default" className="h-9 px-4 rounded-md">
                    View Docs
                  </Button>
                </Link>
              </div>

              {/* Developers */}
              <div className="mb-14">
                <h2 className="text-lg font-medium mb-2.5">Developers</h2>
                <p className="text-muted-foreground/90 text-sm mb-4 leading-relaxed">
                  Learn how to use our API and SDK to extend functionality.
                </p>
                <Link to="/developers">
                  <Button size="sm" variant="default" className="h-9 px-4 rounded-md">
                    API Documentation
                  </Button>
                </Link>
              </div>

              {/* System Status */}
              <div>
                <Link to="/status" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground/90 text-sm">All systems operational</span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
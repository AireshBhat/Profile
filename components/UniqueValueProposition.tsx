import React from 'react'

const UniqueValueProposition: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-brand-text text-4xl font-bold">Unique Value Proposition</h2>
      </div>

      {/* Three-column grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Card 1: The Bridge Builder */}
        <div className="bg-brand-card/30 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h3 className="text-brand-text mb-4 text-xl font-bold">The Bridge Builder</h3>
          <p className="text-brand-text/90 mb-4 leading-relaxed">
            My journey from Web2 to Web3 isn't just a career transition - it's a strategic
            advantage. I understand:
          </p>
          <ul className="text-brand-text/90 space-y-2">
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Where traditional systems excel</strong> and
                where they create bottlenecks
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">How to migrate users</strong> from familiar
                interfaces to blockchain-powered backends
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">The importance of UX</strong> in making
                decentralised systems accessible to billions
              </div>
            </li>
          </ul>
        </div>

        {/* Card 2: Technical Depth Meets System Thinking */}
        <div className="bg-brand-card/30 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h3 className="text-brand-text mb-4 text-xl font-bold">
            Technical Depth Meets System Thinking
          </h3>
          <ul className="text-brand-text/90 space-y-2">
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Frontend to Protocol</strong>: Can build from
                user interface to consensus mechanism
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Multi-chain Fluency</strong>: From EVM chains to
                Substrate, from Solidity to Rust
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Infrastructure Architect</strong>: Experience
                with both centralised (AWS, PostgreSQL) and decentralised (IPFS, Libp2p) systems
              </div>
            </li>
          </ul>
        </div>

        {/* Card 3: Vision for India's Web3 Future */}
        <div className="bg-brand-card/30 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <h3 className="text-brand-text mb-4 text-xl font-bold">Vision for India's Web3 Future</h3>
          <p className="text-brand-text/90 mb-4 leading-relaxed">
            Building technology that serves Bharat's unique needs:
          </p>
          <ul className="text-brand-text/90 space-y-2">
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Financial Sovereignty</strong>: Reimagining
                money and value exchange through DLT
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Digital Identity</strong>: Creating
                self-sovereign identity systems respecting individual agency
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mt-1 mr-2">•</span>
              <div>
                <strong className="text-brand-text">Economic Decentralisation</strong>: Enabling
                peer-to-peer commerce without gatekeepers
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UniqueValueProposition

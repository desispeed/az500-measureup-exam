import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle, BookOpen, TrendingUp, Flag, Clock, BarChart3, Eye, EyeOff, AlertCircle, Info } from 'lucide-react';

const createQuestion = (id, question, correctOption, wrongOptions, explanation, detailedExplanation, objectives) => {
  const allOptions = [correctOption, ...wrongOptions];
  const shuffled = allOptions.sort(() => Math.random() - 0.5);
  const correctIndex = shuffled.indexOf(correctOption);
  
  return {
    id,
    question,
    options: shuffled,
    correct: correctIndex,
    explanation,
    detailedExplanation,
    objectives
  };
};

const generateQuestions = () => {
  return [
    // Identity and Access Management (1-40)
    createQuestion(1, 
      "You need to implement zero-trust security for a hybrid Azure environment. Which Azure service provides identity verification without trusting the network perimeter?",
      "Azure AD Conditional Access",
      ["Azure Bastion", "Azure Firewall", "Network Security Groups"],
      "Azure AD Conditional Access implements zero-trust principles by verifying identity and device compliance regardless of location, not trusting the network perimeter.",
      "Zero-trust is a security model that assumes breach and verifies every access request. Azure AD Conditional Access enforces zero-trust by evaluating multiple signals: user identity, device compliance, location, sign-in risk, and application sensitivity. Unlike perimeter-based security that assumes everything inside the network is trusted, zero-trust requires continuous verification. This is essential for cloud environments where traditional network boundaries don't exist. Implementation: Create policies requiring MFA for risky sign-ins, require device compliance, restrict access by location, require additional verification outside business hours. Benefits: prevents lateral movement from compromised accounts, protects against insider threats, adapts to emerging threats in real-time.",
      "Implement and manage identity and access (20-25%)"
    ),
    
    createQuestion(2, 
      "You need to grant service principals access to Azure resources securely. Which authentication method is most secure?",
      "Certificate-based authentication",
      ["Shared passwords", "Connection strings in code", "Storage keys"],
      "Certificates provide strong, non-interactive authentication without credential sharing.",
      "Service principals represent applications/services in Azure AD. Three authentication methods exist: (1) Passwords - difficult to rotate, prone to exposure, not recommended. (2) Certificates - cryptographically secure, support automatic rotation, create audit trails, don't need to be shared with external systems. (3) Managed Identities - best practice for Azure resources. For third-party applications requiring service principal authentication, use certificates. Process: Create service principal, generate certificate, upload to Azure AD, grant RBAC roles, configure application with certificate. Benefits: automatic credential rotation, clear audit trail, prevents password sharing, supports certificate pinning.",
      "Implement and manage identity and access (20-25%)"
    ),
    
    createQuestion(3, 
      "Your organization requires enforcing MFA for all users. Where should you configure this policy?",
      "Azure AD Conditional Access with report-only mode first",
      ["Firewall rules only", "Network Security Groups", "Storage account settings"],
      "Conditional Access policies enable sophisticated, context-aware MFA enforcement.",
      "MFA enforcement through Conditional Access is superior to blanket MFA requirement because it provides context-aware policies. Process: (1) Create policy in Report-Only mode, (2) Monitor impact on users, (3) Address blockers, (4) Switch to enforcement mode. Policies can require MFA based on: risk level (risky sign-ins), application sensitivity, user location, device compliance, time of day, IP address. Implementation considerations: exclude break-glass accounts for recovery, test with pilot groups first, provide user communication explaining requirements, monitor sign-in logs for issues. Benefits: balances security with usability, targets protection to highest-risk scenarios, adapts automatically as threats change.",
      "Implement and manage identity and access (20-25%)"
    ),
    
    createQuestion(4, 
      "You need to prevent unauthorized access to Azure Key Vault containing encryption keys. What is the foundational control?",
      "Disable public network access and use Private Endpoints",
      ["Public access with weak passwords", "No network controls needed", "Firewall rules only"],
      "Network isolation is the foundation preventing unauthorized access attempts from reaching Key Vault.",
      "Key Vault security requires defense-in-depth starting with network isolation. Implementation layers: (1) Network - disable public network access completely, use Private Endpoints for authorized VNets, configure firewall for specific IPs if internet access required. (2) Identity - use Managed Identities for Azure resources, RBAC with least privilege roles. (3) Monitoring - enable diagnostic logging, alert on failed authentication, track key operations. (4) Key Management - implement key rotation policies, soft delete with purge protection, access reviews. The first step of eliminating internet exposure through network isolation makes Key Vault inaccessible to attackers. Combined with strong access controls, this provides multi-layered protection.",
      "Implement and manage identity and access (20-25%)"
    ),
    
    createQuestion(5, 
      "Your company processes highly sensitive data requiring encryption key control. Which approach provides maximum key control?",
      "Bring Your Own Key (BYOK) with customer-controlled rotation and access",
      ["Microsoft-managed keys only", "No encryption", "Application-level encryption without BYOK"],
      "BYOK gives organizations complete control over encryption key lifecycle and revocation.",
      "BYOK (Bring Your Own Key) is a requirement for highly regulated industries and sensitive data scenarios. You: generate key material, import into Azure Key Vault, control all access, manage rotation schedule, can revoke key access immediately. This differs from Microsoft-managed keys where Microsoft controls key operations. Advantages: you control who can access keys, you control key rotation timing, you can revoke access immediately (making data unreadable), meets regulatory requirements specifying customer key control, supports audit of all key operations. Implementation: use Azure Key Vault Premium tier with HSM-backed keys for highest security, implement key rotation via Azure Functions, maintain secure key backup. Trade-offs: key loss results in permanent data loss (must implement backup), key management responsibility, slight performance overhead.",
      "Implement and manage secrets and keys (15-20%)"
    ),
    
    createQuestion(6, 
      "You need to enforce that all Azure resources have specific tags for compliance tracking. What is the best enforcement method?",
      "Azure Policy with tag requirements in Deny mode",
      ["Manual enforcement by security team", "Azure Advisor recommendations only", "No enforcement mechanism"],
      "Azure Policy automatically prevents creation of non-compliant resources.",
      "Policy-based enforcement is the only method ensuring 100% compliance. Approach: (1) Define policies requiring specific tags: 'CostCenter', 'Owner', 'Environment', 'DataClassification', 'ComplianceRequired'. (2) Assign policies at management group level for organization-wide coverage. (3) Start in Audit mode to identify impact. (4) Switch to Deny mode to enforce. Process: Resource creation without required tags fails, preventing misconfiguration. Benefits: automatic enforcement, no manual reviews needed, audit trail of attempts, enables cost allocation, enables compliance automation. Policy exemptions: create sparingly with documentation, track exemptions for review. This approach ensures consistent tagging supporting downstream compliance requirements.",
      "Manage security governance and compliance (10-15%)"
    ),
    
    createQuestion(7, 
      "Your organization requires real-time threat detection across all Azure resources. Which service provides this?",
      "Microsoft Defender for Cloud with specialized defender plans",
      ["Azure Monitor only", "Azure Advisor", "Network Watcher alone"],
      "Defender for Cloud provides integrated threat detection and recommendations.",
      "Microsoft Defender for Cloud (successor to Azure Security Center) is Azure's primary threat detection platform. Components: (1) Asset inventory - discovers all Azure resources. (2) Secure Score - measures security posture (0-100). (3) Recommendations - prioritized by impact. (4) Threat detection - identifies suspicious activities. (5) Defender plans - specialized detection for specific resources. Defender for Servers detects: malware, suspicious processes, network anomalies, privilege escalation attempts. Defender for SQL detects: SQL injection, data exfiltration, anomalous database activity. Defender for Key Vault detects: suspicious key access, brute-force attempts. Defender for Containers detects: runtime threats, vulnerable images. Integration: automated response through Azure Automation, integration with SIEM, alignment with MITRE ATT&CK framework. Best practice: enable on all subscriptions, configure specialized plans for critical resources, review recommendations weekly.",
      "Implement and maintain security posture (15-20%)"
    ),
    
    createQuestion(8, 
      "You need to implement Just-In-Time VM access to reduce attack surface. Which service provides this feature?",
      "Microsoft Defender for Cloud with JIT policy",
      ["Azure Bastion only", "Network Security Groups", "Load Balancer"],
      "JIT access removes standing RDP/SSH permissions until approved.",
      "Just-In-Time (JIT) VM access is a security control eliminating persistent exposure of management ports. How it works: (1) By default, management ports (RDP 3389, SSH 22) are blocked by NSG, (2) User requests access through Azure Portal, (3) Security team approves request, (4) Port opens for limited time (default 3 hours), (5) Automatic closure via NSG rule deletion. Benefits: prevents brute-force attacks (no standing port exposure), requires approval (prevents unauthorized access), audit trail of all access, automatic closure limits lateral movement if compromised. Configuration: Enable Defender for Cloud, configure JIT policies per VM, define approvers, set approval time windows. Best practices: require approval for all access (no auto-approval), short time windows (1-2 hours), multi-factor authentication, monitor unusual access patterns. This single control can reduce attack surface significantly.",
      "Implement and maintain security posture (15-20%)"
    ),
    
    createQuestion(9, 
      "You need to audit all administrative actions in Azure for compliance. What service provides comprehensive control plane logging?",
      "Azure Activity Log with diagnostic settings for long-term retention",
      ["Application Insights only", "Network Watcher", "No audit available"],
      "Activity Log captures all management plane operations for compliance and investigation.",
      "Azure Activity Log (also called Audit Log) is fundamental for compliance and incident investigation. What it captures: resource creation/deletion/modification, RBAC changes, policy enforcement, all administrative operations, who performed action, when, from which IP, result. Default retention is 90 days. For compliance requirements (HIPAA 6 years, FINRA 7 years, others vary): configure diagnostic settings to export to Log Analytics (searchable queries), storage account (archival), or event hub (streaming). Analysis: create KQL queries for specific activities, alert on deletion spikes, track policy violations, investigate suspicious changes. Integration: export to SIEM for correlation with other logs, combine with Azure Sentinel for threat analysis. Regulatory requirement: most regulations mandate audit log retention. Best practice: establish long-term retention immediately, monitor logs regularly, investigate anomalies quickly.",
      "Manage security governance and compliance (10-15%)"
    ),
    
    createQuestion(10, 
      "Your organization processes payment card data and must comply with PCI-DSS. What is the first required control?",
      "Network segmentation isolating cardholder data environment",
      ["No segmentation needed", "Public network acceptable", "Single network for all resources"],
      "PCI-DSS requires network segmentation protecting cardholder data.",
      "PCI-DSS (Payment Card Industry Data Security Standard) is mandatory for any organization processing credit card data. Requirement: systems handling card data must be isolated from systems that don't. Implementation: (1) Create separate VNet for payment processing systems, (2) Use NSGs with strict inbound/outbound rules allowing only necessary traffic, (3) Implement firewall (Azure Firewall or NVA) controlling all traffic in/out, (4) Monitor all traffic through segmented network. Additional PCI requirements: disk encryption (TDE for databases, BitLocker for VMs), TLS encryption for data in transit, antivirus protection, access logging, vulnerability scanning, annual compliance assessment. Azure support: built-in Policy initiatives for PCI-DSS, encryption services, monitoring tools, compliance templates. Non-compliance consequences: significant fines (up to $100,000 per incident), loss of payment processing capability, reputational damage. Segmentation is the foundation; other controls build on this.",
      "Manage security governance and compliance (10-15%)"
    ),
    
    // Data Protection and Encryption (41-80)
    createQuestion(41, 
      "You need to encrypt Azure SQL Database data at rest with organization-controlled keys. What should you implement?",
      "Transparent Data Encryption (TDE) with customer-managed keys (CMK)",
      ["No encryption", "Application-level only", "Microsoft-managed keys only"],
      "TDE with CMK provides database encryption with organizational key control.",
      "Transparent Data Encryption (TDE) encrypts database, backups, and transaction logs at rest using AES-256. Two key management options: (1) Microsoft-managed keys - default, automatic, no management overhead. (2) Customer-managed keys (CMK/BYOK) - gives you control, meets regulatory requirements, can revoke access. TDE implementation: encryption is transparent to applications, no code changes needed, queries work unchanged. With CMK: you generate keys, import into Azure Key Vault, configure SQL Database to use these keys, control access, implement rotation. Benefits: meet HIPAA/FEDRAMP/SOC2 requirements, audit key usage, revoke access immediately, protect against Microsoft access. Performance: minimal overhead, AES-256 encryption transparent at I/O layer. Combine with: Always Encrypted for column-level encryption of specific sensitive data, firewall rules restricting network access, audit logging.",
      "Implement and manage secrets and keys (15-20%)"
    ),
    
    createQuestion(42, 
      "Your organization requires encrypting data in transit between client and Azure services. What is the minimum TLS requirement?",
      "TLS 1.2 or higher, disable older SSL/TLS versions",
      ["HTTP acceptable for internal traffic", "TLS 1.0 sufficient", "No encryption required"],
      "TLS 1.2+ is the minimum secure protocol for all data in transit.",
      "Transport Layer Security (TLS) protects data from interception during transmission. TLS versions: SSL 3.0, TLS 1.0, TLS 1.1 - DEPRECATED (security vulnerabilities), TLS 1.2 - acceptable (released 2008), TLS 1.3 - preferred (released 2018). Azure enforcement: (1) Configure services to enforce minimum TLS 1.2, (2) Disable older protocols completely (no fallback), (3) Use strong cipher suites, (4) Implement certificate pinning in applications. Configuration examples: Azure Storage - set minimum TLS version to 1.2, Application Gateway - configure HTTPS listener with TLS 1.2+, App Service - configure HTTPS only. Audit: regularly scan for HTTP usage (should be 0%), test TLS version support, monitor cipher suites. For regulated industries and sensitive data: require TLS 1.3 for new deployments. This is foundational - any organization claiming security but using older TLS versions has failed basic security.",
      "Implement and manage secrets and keys (15-20%)"
    ),
    
    createQuestion(43, 
      "You need to protect Azure Storage from ransomware attacks. What multi-layered approach should you implement?",
      "Immutability + soft delete + snapshots + access restrictions",
      ["Encryption alone", "No ransomware protection needed", "Deletion only"],
      "Comprehensive protection requires multiple layers against ransomware.",
      "Ransomware attacks encrypt or delete data to extort organizations. Multi-layer defense: (1) Soft Delete - retains deleted blobs for 7-365 days, enables accidental recovery, can be recovered by authorized users. (2) Immutability Policy - prevents modification/deletion during retention period, even by administrators/attackers with high permissions. (3) Snapshots - create point-in-time copies, automatically or on schedule, store in separate storage account. (4) Access Controls - implement least privilege RBAC, use SAS tokens with minimal permissions, enable Private Endpoints. (5) Monitoring - alert on unusual deletion patterns, track access patterns, investigate spikes. Implementation: Enable soft delete (7 days minimum), create immutability policy (30-365 days), schedule daily snapshots, separate backup storage with restricted access, test recovery procedures quarterly. Considerations: costs for retained data and snapshots, recovery time objectives (RPO/RTO). Ransomware costs average $200,000+ - prevention investment is justified. This is critical for any organization with data they cannot afford to lose.",
      "Implement and manage data protection (20-25%)"
    ),
    
    createQuestion(44, 
      "You need to encrypt specific sensitive database columns so database admins cannot view plaintext. Which feature should you use?",
      "Always Encrypted with client-side encryption",
      ["Transparent Data Encryption (TDE) only", "No column encryption", "Basic password protection"],
      "Always Encrypted provides client-side encryption where database never sees plaintext.",
      "Always Encrypted is a column-level encryption technology for maximum data privacy. How it works: (1) Client application encrypts sensitive values before sending to database, (2) Database receives encrypted data, stores encrypted, (3) Database returns encrypted data to authorized client, (4) Client decrypts with appropriate key. Database never sees plaintext data or encryption keys. Encryption keys: stored in client application, Key Vault, or HSM. When to use: PII (names, SSNs, credit cards), healthcare data (medical records), financial data. Limitations: encrypted columns have query limitations (cannot use LIKE operator, BETWEEN, ORDER BY), requires application-side implementation, adds processing overhead. Implementation: (1) Identify sensitive columns, (2) Generate column master keys and column encryption keys, (3) Update connection strings, (4) Modify application to use parameterized queries. Benefits: database admins cannot access encrypted data, SQL injection attacks cannot read encrypted columns, provides strongest data privacy. Combine with: TDE for encryption at rest, firewall rules, audit logging. This is the gold standard for protecting highly sensitive data.",
      "Implement and manage data protection (20-25%)"
    ),
    
    createQuestion(45, 
      "You need to securely store database connection strings used by applications. Where should you store them?",
      "Azure Key Vault as secrets",
      ["Application code", "Configuration files", "Environment variables in plain text"],
      "Key Vault provides secure secret management with access control.",
      "Storing credentials in code or configuration is a critical vulnerability. Every year, thousands of private repositories are compromised by credentials in code. Key Vault solution: (1) Create secret in Key Vault containing connection string, (2) Grant applications Managed Identity, (3) Application retrieves secret at runtime via Key Vault SDK. Benefits: credentials never appear in code/config, automatic audit logging of secret access, RBAC controls who can access, easy credential rotation without redeployment, Managed Identity eliminates explicit credentials. Implementation: (1) Create storage connection string secret in Key Vault, (2) Create managed identity for application (VM, App Service, Container Instance, etc.), (3) Grant 'Key Vault Secrets User' role to identity, (4) Configure application to retrieve secret. Best practices: (1) Store per-environment secrets separately (dev, test, prod), (2) Rotate credentials periodically, (3) Monitor access logs for suspicious patterns, (4) Implement alerts for failed access attempts, (5) Use separate managed identities per application. This is non-negotiable for production applications.",
      "Implement and manage secrets and keys (15-20%)"
    ),
    
    createQuestion(46, 
      "Your regulatory requirements specify encryption keys must never exist in software form. What Azure service provides this?",
      "Azure Key Vault Premium tier with Hardware Security Module (HSM)",
      ["Standard Key Vault tier", "Application-managed keys", "No HSM support"],
      "HSM-backed keys in Key Vault Premium ensure keys never exist in software form.",
      "Hardware Security Module (HSM) is a FIPS 140-2 Level 3 certified device that generates, stores, and manages cryptographic keys in hardware form. Keys never exist in software, cannot be extracted, cannot be exported. Azure Key Vault Premium tier offers: Thales Luna HSM integration, FIPS 140-2 compliance, geographic redundancy (HSMs in multiple regions). Requirements: HIPAA (healthcare), PCI-DSS (payment processing), FedRAMP (government), DoD regulations often mandate HSM-backed keys. Trade-offs: higher cost (~$1000/month premium), slightly higher latency, not all regions available, more management complexity. Implementation: (1) Create Premium Key Vault in region with HSM availability, (2) Import or generate keys in HSM, (3) Configure services to use HSM-backed keys, (4) Implement proper key backup (even HSM requires backup, stored securely). Benefits: highest security level, regulatory compliance, protection against key theft, audit trail of key operations. For sensitive data, HSM-backed keys justify the investment.",
      "Implement and manage secrets and keys (15-20%)"
    ),
    
    createQuestion(47, 
      "You need to ensure all Azure Storage access uses encrypted connections. What should you enforce?",
      "HTTPS/TLS 1.2 minimum with HTTP disabled completely",
      ["HTTP acceptable for internal networks", "TLS 1.0 sufficient", "Weak encryption acceptable"],
      "HTTPS/TLS protects storage credentials and data from interception.",
      "Configuration: (1) Set 'Secure transfer required' flag on storage account (blocks HTTP), (2) Enforce minimum TLS version 1.2 (disable older protocols), (3) Disable legacy protocols completely (no fallback). Testing: (1) Attempt HTTP requests (should fail), (2) Verify TLS version on HTTPS connections, (3) Check cipher suites, (4) Monitor logs for HTTP attempts. Benefits: prevents man-in-the-middle attacks, protects credentials during transmission, meets compliance requirements (PCI-DSS, HIPAA), prevents protocol downgrade attacks. Best practices: (1) Disable HTTP entirely (no exceptions), (2) Use TLS 1.3 for new deployments, (3) Implement certificate pinning in applications, (4) Monitor for unusual access patterns, (5) Update client libraries to support TLS 1.2+. For any storage containing data: this is mandatory.",
      "Implement and manage data protection (20-25%)"
    ),
    
    // Network Security (81-120)
    createQuestion(81, 
      "You need to protect a web application from SQL injection and XSS attacks. What Azure service provides layer 7 protection?",
      "Application Gateway with Web Application Firewall (WAF)",
      ["Network Security Groups only", "Azure Firewall layer 3-4 only", "Load Balancer without WAF"],
      "WAF provides application layer protection against common web exploits.",
      "Web Application Firewall (WAF) operates at OSI layer 7 (application layer) detecting and blocking sophisticated attacks. Attack types blocked: (1) SQL injection - detects malformed SQL in requests, (2) Cross-site scripting (XSS) - detects malicious scripts, (3) Command injection - detects shell commands, (4) CSRF - detects cross-site request forgery, (5) Local file inclusion - detects directory traversal, (6) Remote code execution attempts. Rule sets: OWASP Core Rule Set (covers OWASP Top 10), DRS (Default Rule Set), custom rules for organization-specific threats. Configuration: (1) Deploy in detection mode initially (logs attacks without blocking), (2) Analyze logs to identify patterns, (3) Tune rules to balance security/usability, (4) Switch to prevention mode blocking attacks. Benefits: granular protection at application level, understands HTTP/HTTPS, can inspect request bodies, protects against zero-day attacks using signatures. Combine with: NSGs (layer 3-4 filtering), DDoS Protection Standard (volumetric attacks), Azure Firewall (network segmentation). This is essential for any internet-facing web application.",
      "Configure and manage network security (20-25%)"
    ),
    
    createQuestion(82, 
      "You need to protect public-facing applications from DDoS attacks. What is the recommended approach?",
      "Azure DDoS Protection Standard + WAF on Application Gateway",
      ["Basic DDoS protection only", "Firewall rules alone", "No DDoS protection"],
      "DDoS Protection Standard provides real-time mitigation of large-scale attacks.",
      "DDoS attacks flood resources with massive traffic making them unavailable. Azure DDoS Protection Standard provides: (1) Volumetric attacks protection - absorbs terabit-scale traffic using Microsoft's network infrastructure. (2) Protocol attacks protection - detects malformed packets, fragments, stateless floods. (3) Application layer attacks protection - detects HTTP floods, DNS amplification. Real-time mitigation: Azure network automatically absorbs attacks before reaching your resources. Features: (1) Cost protection - no charges for traffic during DDoS events, (2) DDoS Response Team (DRT) - expert support for complex attacks, (3) Attack analytics - detailed reports on attacks, (4) Preventive policies - customizable triggers. Basic tier is free and automatic but limited. Standard tier (per public IP) provides comprehensive protection. Implementation: (1) Enable Standard tier on public IPs, (2) Configure alert policies, (3) Review protection reports regularly, (4) Coordinate with DRT if attacks occur. For any public-facing application: Standard tier is essential protection. Combine with WAF for layer 7 protection.",
      "Configure and manage network security (20-25%)"
    ),
    
    createQuestion(83, 
      "You need to segment your network separating sensitive workloads from public systems. What Azure resources enable this?",
      "Virtual Networks (VNets) with subnets and Network Security Groups (NSGs)",
      ["Firewall rules alone", "Load balancer only", "No segmentation possible"],
      "VNets and NSGs enable network segmentation with granular traffic control.",
      "Network segmentation is security best practice dividing environment into zones by security level. Architecture: (1) Create separate VNets for different security zones (DMZ, internal, restricted). (2) Create subnets within VNets for workload segregation (web tier, app tier, database tier). (3) Implement NSGs at subnet level (affects all resources) and/or NIC level (affects specific VMs). (4) Use User Defined Routes (UDRs) to force traffic through network appliances (firewall) for inspection. Rule strategy: (1) Default deny all inbound, (2) Explicitly allow required traffic, (3) Document every rule, (4) Monitor NSG logs. Benefits: limits blast radius if zone is compromised, prevents lateral movement between zones, provides visibility into traffic flows, supports compliance. Advanced: (1) Route traffic through Network Virtual Appliance (NVA) for deep inspection, (2) Implement VNET peering for hub-and-spoke topology, (3) Monitor with Network Watcher. This is fundamental network security architecture.",
      "Configure and manage network security (20-25%)"
    ),
    
    createQuestion(84, 
      "You need to access Azure SQL Database from your VNet without exposing it to the internet. What feature should you use?",
      "Private Endpoints",
      ["Public endpoints required", "Internet access needed", "No private access available"],
      "Private Endpoints create private IP addresses for services within your VNet.",
      "Private Endpoints eliminate public IP exposure for Azure PaaS services. How it works: (1) Create private endpoint in your VNet, (2) Service receives private IP address within VNet, (3) Access service via private IP only, (4) No internet routing required. Benefits: (1) Eliminates public IP exposure, (2) Prevents internet-based attacks, (3) DDoS attacks must target your VNet first, (4) Enables network segmentation, (5) Reduces attack surface. Services supporting Private Endpoints: Storage, SQL Database, Cosmos DB, Key Vault, App Service, Event Hub, Service Bus, many others. Implementation: (1) Create private endpoint in subnet, (2) Configure private DNS zone for service, (3) Update connection strings to use private IP, (4) Monitor endpoint connectivity. Best practices: (1) Use for all sensitive services, (2) Implement private DNS zones for name resolution, (3) Monitor endpoint activity, (4) Test connectivity regularly. This is essential for protecting services handling sensitive data.",
      "Configure and manage network security (20-25%)"
    ),
    
    // Threat Detection (121-140)
    createQuestion(121, 
      "You need real-time threat detection and investigation across all Azure resources. Which service provides this SIEM capability?",
      "Azure Sentinel (Cloud-native SIEM)",
      ["Azure Monitor metrics only", "Application Insights", "Azure Advisor"],
      "Sentinel is Azure's cloud-native SIEM for threat detection and response.",
      "Azure Sentinel collects logs from Azure, on-premises, and third-party sources for centralized threat detection. Components: (1) Data connectors - ingest logs from 100+ sources, (2) Analytics rules - detect threats using machine learning and custom logic, (3) Workbooks - visualize security data, (4) Incident management - investigate and track incidents, (5) Playbooks - automated response via Logic Apps, (6) Threat hunting - proactive search for threats. Capabilities: (1) Correlates data across sources - detects attacks spanning multiple systems, (2) Machine learning - identifies anomalies (unusual sign-in patterns, data exfiltration), (3) MITRE ATT&CK mapping - aligns detections to known attack techniques, (4) Entity relationships - shows how compromised entities connect. Investigation workflow: (1) Alert triggers, (2) Incident created, (3) Timeline shows event sequence, (4) Entity investigation reveals scope, (5) Playbook executes automated response. Implementation: (1) Enable Sentinel, (2) Configure data connectors (Azure Activity Log, Defender for Cloud, etc.), (3) Import analytics rules (pre-built rules for common scenarios), (4) Create custom rules for organizational threats, (5) Set up playbooks for automated response. This is foundational for mature security operations.",
      "Configure and manage security operations (15-20%)"
    ),
    
    createQuestion(122, 
      "You need to automatically respond to detected security incidents. What Sentinel feature enables this?",
      "Playbooks (Azure Logic Apps) triggered by analytics rules",
      ["Manual response only", "Email notifications", "No automation available"],
      "Playbooks execute automated response actions when detection rules trigger.",
      "Playbooks are Azure Logic Apps containing workflows triggered by Sentinel detections. Example scenario: (1) Defender for Cloud detects malware on VM, (2) Analytics rule creates incident, (3) Playbook automatically executes: isolates VM from network, revokes leaked credentials, notifies security team, creates incident ticket, collects forensic evidence. Action examples: (1) Disable compromised Azure AD account, (2) Revoke refresh tokens, (3) Isolate VM from network, (4) Terminate RDP sessions, (5) Create tickets in ITSM (ServiceNow, Jira), (6) Notify via email/Teams, (7) Create snapshots for forensics, (8) Invoke third-party APIs. Benefits: (1) Faster response (minutes vs hours), (2) Consistent response procedures, (3) Reduces human error, (4) Audit trail of actions, (5) Reduces MTTR (Mean Time To Respond). Best practices: (1) Start with low-risk automations (notifications only), (2) Thoroughly test before deployment, (3) Include approval steps for high-risk actions, (4) Monitor unintended consequences, (5) Iterate based on learnings. Most effective playbooks combine automated response with human decision gates.",
      "Configure and manage security operations (15-20%)"
    ),
    
    createQuestion(123, 
      "You need to proactively hunt for advanced threats that automated systems may have missed. What Sentinel feature supports this?",
      "Threat hunting with KQL (Kusto Query Language) queries",
      ["Detection rules only", "No hunting available", "Automated detection alone"],
      "Threat hunting uses custom queries to proactively search for suspicious patterns.",
      "Threat hunting is proactive security analysis by skilled analysts searching for indicators of compromise (IoCs) and attack patterns. Process: (1) Develop hypothesis based on threat intelligence (MITRE ATT&CK framework), (2) Create KQL query to search logs for pattern, (3) Analyze results for anomalies, (4) Escalate findings for investigation. Examples: hunting for living-off-the-land attacks (Windows built-in tools), persistence mechanisms, lateral movement paths, data exfiltration patterns. Sentinel support: (1) Pre-built hunting queries (provided by Microsoft), (2) KQL language for custom queries, (3) Hunt bookmarks to save and share findings, (4) Investigation graph for relationship analysis. Requires: (1) Threat intelligence knowledge, (2) Technical skills (KQL fluency), (3) Understanding of normal baselines, (4) Persistence - not all threats have obvious indicators. Best practices: (1) Dedicate analyst time to hunting (20% of time typical), (2) Share findings across team, (3) Develop custom queries for your environment, (4) Tune SIEM based on hunting results, (5) Correlate findings with external threat intelligence. Hunting catches sophisticated attacks that automated rules miss.",
      "Configure and manage security operations (15-20%)"
    ),
    
    createQuestion(124, 
      "You need to ensure all privileged access is audited and approved. What Azure service supports this requirement?",
      "Azure AD Privileged Identity Management (PIM)",
      ["No privileged access management", "Manual approval process", "No audit available"],
      "PIM enforces just-in-time access with approval workflows and audit.",
      "Privileged Identity Management (PIM) is Azure's solution for managing privileged access. Instead of permanent role assignments, PIM provides: (1) Time-limited access - roles activate for 1-8 hours then revoke automatically, (2) Approval workflows - requires approval from designated reviewers, (3) MFA requirement - requires second factor for activation, (4) Justification - users provide business reason for access, (5) Audit trail - comprehensive logging of all access. Benefits: (1) Reduces standing privileges reducing breach risk, (2) Requires business justification, (3) Automatic access revocation (no cleanup needed), (4) Clear audit trail for compliance, (5) Emergency access procedures for break-glass scenarios. Implementation: (1) Identify privileged roles to protect (Owner, Admin, custom high-privilege roles), (2) Remove permanent assignments, (3) Convert to PIM-eligible roles, (4) Configure activation requirements (approval, MFA, time limit), (5) Set up notifications, (6) Regular access reviews. Best practices: (1) Short activation windows (1-2 hours typical), (2) Approval by separate person (prevents individual override), (3) MFA always required, (4) Quarterly access reviews removing unnecessary access, (5) Just-in-time principle - access only when needed. This is essential for least privilege.",
      "Implement and manage identity and access (20-25%)"
    ),
    
    createQuestion(125, 
      "You need to detect when Azure AD user accounts are compromised. What service provides this detection?",
      "Azure AD Identity Protection with machine learning risk detection",
      ["Password policies alone", "No compromise detection", "Manual monitoring"],
      "Identity Protection uses ML to detect account compromise patterns.",
      "Azure AD Identity Protection analyzes sign-in patterns to detect compromised accounts. Detection signals: (1) Impossible travel - same user in different locations within impossible timeframes, (2) Atypical travel - sign-in from unusual location compared to baseline, (3) Infected device - sign-in from device known to have malware, (4) Anonymous IP - sign-in from VPN/proxy, (5) Credential leak - credentials found in dark web (from password dump databases), (6) Brute-force attempts - multiple failed sign-ins (password spray attacks). Risk scoring: (1) User risk - indicates account compromise probability, (2) Sign-in risk - indicates specific sign-in risk. Response: (1) Require password reset, (2) Require MFA, (3) Block access completely, (4) Automatic or manual review. Integration: (1) Conditional Access policies can respond automatically, (2) Administrators review risk dashboard, (3) Alerts sent on high-risk detections. Configuration: (1) Enable Identity Protection in Azure AD, (2) Set user risk and sign-in risk policies, (3) Integrate with Conditional Access, (4) Monitor and investigate. Best practices: (1) Enable for all users (not just admins), (2) Start with Investigation mode, (3) Tune policies based on organization, (4) Investigate high-risk users, (5) Educate users on common attacks. This significantly reduces breach dwell time.",
      "Implement and manage identity and access (20-25%)"
    )
  ];
};

export default function MeasureUpAZ500Exam() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [markedQuestions, setMarkedQuestions] = useState(new Set());
  const [showExplanation, setShowExplanation] = useState(false);
  const [viewMode, setViewMode] = useState('exam');
  const [reviewAnswers, setReviewAnswers] = useState({});
  const [examStats, setExamStats] = useState({});

  useEffect(() => {
    const allQuestions = generateQuestions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerSelect = (index) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      setTotalAttempted(totalAttempted + 1);
      const questionId = shuffledQuestions[currentQuestionIndex].id;
      setReviewAnswers(prev => ({ ...prev, [questionId]: index }));
      if (index === shuffledQuestions[currentQuestionIndex].correct) {
        setScore(score + 1);
      }
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowResults(false);
      setShowExplanation(false);
    } else {
      setViewMode('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevQuestion = shuffledQuestions[currentQuestionIndex - 1];
      const prevAnswer = reviewAnswers[prevQuestion.id];
      setSelectedAnswer(prevAnswer !== undefined ? prevAnswer : null);
      setAnswered(prevAnswer !== undefined);
      setShowResults(prevAnswer !== undefined);
    }
  };

  const toggleMark = () => {
    const questionId = shuffledQuestions[currentQuestionIndex].id;
    const newMarked = new Set(markedQuestions);
    if (newMarked.has(questionId)) newMarked.delete(questionId);
    else newMarked.add(questionId);
    setMarkedQuestions(newMarked);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setTotalAttempted(0);
    setShowResults(false);
    setShowExplanation(false);
    setMarkedQuestions(new Set());
    setReviewAnswers({});
    setViewMode('exam');
    const allQuestions = generateQuestions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">MeasureUp Practice Exam</h1>
          <p className="text-slate-300">Azure AZ-500 Security Engineer</p>
          <p className="text-slate-400 mt-4">Loading questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
  const percentage = totalAttempted > 0 ? Math.round((score / totalAttempted) * 100) : 0;
  const isMarked = markedQuestions.has(currentQuestion.id);
  const currentAnswer = reviewAnswers[currentQuestion.id];
  const isAnsweredCorrect = currentAnswer === currentQuestion.correct;

  // Results View
  if (viewMode === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <BarChart3 className="w-20 h-20 text-blue-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Exam Results</h1>
              <p className="text-gray-600">AZ-500 Security Engineer Practice Exam</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Score</p>
                <p className="text-3xl font-bold text-blue-600">{percentage}%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Correct</p>
                <p className="text-3xl font-bold text-green-600">{score}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Incorrect</p>
                <p className="text-3xl font-bold text-red-600">{totalAttempted - score}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Total Questions</p>
                <p className="text-3xl font-bold text-purple-600">{totalAttempted}</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">Performance Score</span>
                <span className="font-bold text-gray-800">{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full transition-all ${
                    percentage >= 70 ? 'bg-green-600' : 'bg-red-600'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span>Passing: 70%</span>
                <span className={percentage >= 70 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                  {percentage >= 70 ? '✓ PASSED' : '✗ FAILED'}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Exam Analysis</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Review marked questions to reinforce weak areas</li>
                    <li>• Study detailed explanations for incorrect answers</li>
                    <li>• Focus on exam objectives: Identity/Access, Data Protection, Network Security, Operations</li>
                    <li>• Retake exam after studying to verify improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setViewMode('review')}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                <Eye className="w-5 h-5" />
                Review Answers
              </button>
              <button
                onClick={handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Review Mode
  if (viewMode === 'review') {
    const reviewQuestion = shuffledQuestions[currentQuestionIndex];
    const reviewAnswer = reviewAnswers[reviewQuestion.id];
    const isCorrect = reviewAnswer === reviewQuestion.correct;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">Review Mode</h1>
              <div className="text-white text-sm">
                <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
              </div>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 flex-1">{reviewQuestion.question}</h2>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold whitespace-nowrap ml-4 ${
                  isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                {isCorrect ? 'Correct' : 'Incorrect'}
              </div>
            </div>

            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-yellow-900">Exam Objective</p>
                <p className="text-sm text-yellow-800">{reviewQuestion.objectives}</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {reviewQuestion.options.map((option, index) => {
                const isCorrectOption = index === reviewQuestion.correct;
                const isSelectedOption = index === reviewAnswer;
                let style = 'bg-gray-50 border-gray-200';
                if (isCorrectOption) style = 'bg-green-50 border-green-500 border-2';
                else if (isSelectedOption && !isCorrectOption) style = 'bg-red-50 border-red-500 border-2';

                return (
                  <div key={index} className={`p-4 border rounded-lg ${style}`}>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-gray-600 text-lg">{String.fromCharCode(65 + index)}.</span>
                      <div className="flex-1">
                        <p className="text-gray-800">{option}</p>
                      </div>
                      {isCorrectOption && <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />}
                      {isSelectedOption && !isCorrectOption && <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-6">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4"
              >
                {showExplanation ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                {showExplanation ? 'Hide' : 'Show'} Detailed Explanation
              </button>

              {showExplanation && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-3">Detailed Explanation</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">{reviewQuestion.detailedExplanation}</p>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-300 rounded-lg p-4">
                <p className="text-sm"><span className="font-semibold text-gray-900">Answer: </span><span className="text-gray-700">{reviewQuestion.explanation}</span></p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </button>
            <button
              onClick={() => setViewMode('results')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
            >
              <BarChart3 className="w-5 h-5" /> Back to Results
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === shuffledQuestions.length - 1}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all"
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam Mode
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">MeasureUp Practice Exam</h1>
                <p className="text-blue-100">Azure AZ-500: Security Engineer Associate</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
                </div>
                <div className="text-2xl font-bold">{score}/{totalAttempted}</div>
              </div>
            </div>
            <div className="w-full bg-blue-500 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            {/* Objectives */}
            <div className="mb-6 p-4 bg-slate-100 border-l-4 border-blue-600 rounded">
              <p className="text-sm font-semibold text-gray-700">Exam Objective:</p>
              <p className="text-sm text-gray-600">{currentQuestion.objectives}</p>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex-1">{currentQuestion.question}</h2>
                <button
                  onClick={toggleMark}
                  className={`flex-shrink-0 ml-4 p-2 rounded-lg transition-all ${
                    isMarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="Mark for review"
                >
                  <Flag className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => {
                const isCorrect = index === currentQuestion.correct;
                const isSelected = index === selectedAnswer;
                let bgStyle = 'bg-white hover:bg-gray-50 border-gray-300';
                let textStyle = 'text-gray-800';

                if (answered) {
                  if (isCorrect) {
                    bgStyle = 'bg-green-50 border-green-500 border-2';
                    textStyle = 'text-green-900';
                  } else if (isSelected && !isCorrect) {
                    bgStyle = 'bg-red-50 border-red-500 border-2';
                    textStyle = 'text-red-900';
                  }
                } else if (isSelected) {
                  bgStyle = 'bg-blue-50 border-blue-500 border-2';
                  textStyle = 'text-blue-900';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answered}
                    className={`w-full p-4 border-2 rounded-lg transition-all text-left font-medium ${bgStyle} ${
                      answered ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-8 h-8 rounded-full bg-gray-200 text-center leading-8 font-bold text-gray-700">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className={textStyle}>{option}</p>
                      </div>
                      {answered && isCorrect && <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />}
                      {answered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback */}
            {showResults && (
              <div className="mb-8 border-t pt-6">
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4"
                >
                  {showExplanation ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  {showExplanation ? 'Hide' : 'Show'} Detailed Explanation
                </button>

                {showExplanation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-blue-900 mb-3">Detailed Explanation</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">{currentQuestion.detailedExplanation}</p>
                  </div>
                )}

                <div
                  className={`rounded-lg p-4 border-2 ${
                    isAnsweredCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                  }`}
                >
                  <p className={`font-semibold mb-2 ${isAnsweredCorrect ? 'text-green-900' : 'text-red-900'}`}>
                    {isAnsweredCorrect ? '✓ Correct Answer' : '✗ Incorrect Answer'}
                  </p>
                  <p className={`text-sm ${isAnsweredCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 border-t p-6 flex flex-col sm:flex-row gap-3 justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </button>

            {currentQuestionIndex === shuffledQuestions.length - 1 ? (
              <button
                onClick={() => setViewMode('results')}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
              >
                <BarChart3 className="w-5 h-5" /> View Results
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all"
            >
              <RotateCcw className="w-5 h-5" /> Reset
            </button>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 px-8 py-4 text-center text-sm text-gray-600">
            <p>Marked for Review: {markedQuestions.size} | Current Score: {score}/{totalAttempted}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

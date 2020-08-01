import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
})

// CONTENTFUL ENTRY IDS
// Pages
const homePageEntryId = '67FhJcbL4dHpbAOm4pd6ET'
const applyPageEntryId = 'MVbC7bhOm2fRMqGd5f6iP'
const volunteerPageEntryId = '4D9bygQz21rkPZtsRb8ccr'
const aboutPageEntryId = '3VD8j3TGv3H66fVLrHGWuC'
const hirePageEntryId = '3GYBEvTTDYiSVqJsaFOxQH'
const donatePageEntryId = '4Bgw3nkgsjcZdTiVfmkz11'
const newsletterEntryId = '6nVbMbpGqdNpi2zDDTExpA'
const privacyEntryId = '31HpbZLXdpU9xxKqk4uUtp'
const applicationConfirmationEntryId = '7fot9r9IvXMdPYrtzOlwE5'

// Partners and press
const partnersEntryId = '3CEyXyD8onF9pJd1cMboxP'
const sponsorEntryId = '3H7wmN35ixihm684bqeSea'
const pressEntryId = '3EdwVQtZsN7jEnaxwe9qbm'

// Team members
const coreTeamEntryId = '1IqH7UoXZ6cIWvyyq0p4qk'
const boardMembersEntryId = '1TjBxNqZHJ7LFVlpRfP7rf'
const graduatesEntryId = '3jY3dHnHF4KFSwMnLkKXl'
const mentorsEntryId = '3WPLgg9bIRKvZOp6OcXr8r'

// Features
const contactInfoEntryId = '57BmNlPMn5pBZBBvPNIoLC'

// FETCH ENTRIES
// by entry ID
async function fetchEntry(entryId) {
    const entry = await client.getEntry(entryId)
    const entryData = entry.fields
    if (entry.fields) return entryData
    else console.log(`error fetching content`)
}

// by content type
async function fetchEntries(contentType) {
    const entries = await client.getEntries({
        content_type: contentType,
        order: 'fields.id'
    })
    const entriesList = entries.items
    if (entries.items) return entriesList
    else console.log(`error fetching data`)
}

// PAGES
// HOME Page
export async function fetchHomePageContent() {
    const entry = await fetchEntry(homePageEntryId)
    const title = entry.headline
    const content = entry.mainBody
    return { title, content }
}

// ABOUT Page
export async function fetchAboutContent() {
    const entry = await fetchEntry(aboutPageEntryId)
    const title = entry.headline
    const content = entry.mainBody
    return { title, content }
}

export async function fetchContactInfo() {
    const contactInfo = await fetchEntry(contactInfoEntryId)
    return contactInfo
}

// VOLUNTEER PAGE
export async function fetchVolunteerPageContent() {
    const content = await fetchEntry(volunteerPageEntryId)
    return content
}

// APPLY Page
export async function fetchApplyPageContent() {
    const entry = await fetchEntry(applyPageEntryId)
    const title = entry.headline
    const contentOne = entry.mainBody
    const contentTwo = entry.mainArea[0].fields.content
    return { title, contentOne, contentTwo }
}

// requirements for applicants
export async function fetchRequirements() {
    const requirementsList = await fetchEntries('requirements')
    return requirementsList
}

// HIRE Page
export async function fetchHirePageContent() {
    const entry = await fetchEntry(hirePageEntryId)
    const title = entry.headline
    const content = entry.mainBody
    return { title, content }
}

// DONATE Page
export async function fetchDonatePageContent() {
    const entry = await fetchEntry(donatePageEntryId)
    const title = entry.headline
    const content = entry.mainBody
    return { title, content }
}

// PARTNERS
export async function fetchPress() {
    const press = await fetchEntry(pressEntryId)
    return press.list
}

export async function fetchPartners() {
    const partners = await fetchEntry(partnersEntryId)
    return partners.list
}

export async function fetchSponsor() {
    const sponsor = await fetchEntry(sponsorEntryId)
    return sponsor
}

// TEAM MEMBERS
export async function fetchCoreTeam() {
    const teamMembers = await fetchEntry(coreTeamEntryId)
    return teamMembers
}

export async function fetchBoardMembers() {
    const teamMembers = await fetchEntry(boardMembersEntryId)
    return teamMembers
}

export async function fetchGraduates() {
    const graduates = await fetchEntry(graduatesEntryId)
    return graduates
}

export async function fetchMentors() {
    const mentors = await fetchEntry(mentorsEntryId)
    return mentors
}

// FAQ
export async function fetchFaq() {
    const faq = await fetchEntries('faq')
    return faq
}

export async function fetchFaqMentors() {
    const faq = await fetchEntries('faqMentors')
    return faq
}
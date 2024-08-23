function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 2;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning ...,  How can i help you")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon...,  How can i help you")
    }

    else{
        speak("Good Evenining ...")
        speak("How can i help you")
        
    }

}

window.addEventListener('load', ()=>{
    speak("Welcome to Pharmacy bank");
    wishMe();
});



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
             
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Drug Description", "Drug Indications", "Drug SideEffects"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
       strings: ["Drug Description", "Drug Indications", "Drug SideEffects"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//selvam js for drug data base

const drugs = [
    {
        name: "Aspirin",
        description: "Aspirin is a medication used to treat pain, fever, and inflammation. It is commonly used to relieve minor aches and pains.",
        indications: "Aspirin is indicated for the treatment of mild to moderate pain, fever, and inflammation.",
        sideEffects: "Common side effects of aspirin include stomach upset, heartburn, and drowsiness.",
        dosage: "Adult dose for pain/fever: 325-650 mg every 4-6 hours as needed. Maximum daily dose: 4 g.",
        interactions: "Aspirin may interact with anticoagulants, NSAIDs, and certain medications used to treat high blood pressure.",
        warnings: "Do not take aspirin if you are allergic to it or if you have a history of stomach ulcers or bleeding disorders.",
        atcCodes: ["B01AC06"],
        products: ["Bayer Aspirin", "Ecotrin", "Bufferin"],
        smiles: "CC(=O)OC1=CC=CC=C1C(=O)O"
    },
    {
        name: "Ibuprofen",
        description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, fever, and inflammation.",
        indications: "Ibuprofen is indicated for the relief of mild to moderate pain and inflammation.",
        sideEffects: "Common side effects of ibuprofen include stomach pain, nausea, and dizziness.",
        dosage: "Adult dose for pain/fever: 200-400 mg every 4-6 hours as needed. Maximum daily dose: 1.2 g.",
        interactions: "Ibuprofen may interact with aspirin, anticoagulants, and certain medications used to treat high blood pressure.",
        warnings: "Do not take ibuprofen if you have a history of stomach ulcers or bleeding disorders.",
        atcCodes: ["M01AE01"],
        products: ["Advil", "Motrin", "Nurofen"],
        smiles: "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O"
    },
    {
        name: "Paracetamol (Acetaminophen)",
        description: "Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever.",
        indications: "Paracetamol is indicated for the treatment of mild to moderate pain and fever.",
        sideEffects: "Paracetamol is generally well-tolerated, but overdose can cause liver damage.",
        dosage: "Adult dose for pain/fever: 500-1000 mg every 4-6 hours as needed. Maximum daily dose: 4 g.",
        interactions: "Paracetamol may interact with certain medications used to treat high blood pressure or epilepsy.",
        warnings: "Do not exceed the recommended dose of paracetamol as overdose can lead to liver damage.",
        atcCodes: ["N02BE01"],
        products: ["Tylenol", "Panadol", "Calpol"],
        smiles: "CC(=O)NC1=CC=C(O)C=C1"
    },
    {
        name: "Paracetamol",
        description: "Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever.",
        indications: "Paracetamol is indicated for the treatment of mild to moderate pain and fever.",
        sideEffects: "Paracetamol is generally well-tolerated, but overdose can cause liver damage.",
        dosage: "Adult dose for pain/fever: 500-1000 mg every 4-6 hours as needed. Maximum daily dose: 4 g.",
        interactions: "Paracetamol may interact with certain medications used to treat high blood pressure or epilepsy.",
        warnings: "Do not exceed the recommended dose of paracetamol as overdose can lead to liver damage.",
        atcCodes: ["N02BE01"],
        products: ["Tylenol", "Panadol", "Calpol"],
        smiles: "CC(=O)NC1=CC=C(O)C=C1"
    },
    {
        name: "Lisinopril",
        description: "Lisinopril is a medication used to treat high blood pressure, heart failure, and improve survival after heart attacks. It is an ACE inhibitor.",
        indications: "Lisinopril is indicated for the treatment of hypertension (high blood pressure) and heart failure.",
        sideEffects: "Common side effects of lisinopril include dizziness, cough, and headache.",
        dosage: "Adult dose for hypertension: Initial dose 10 mg once daily. Maximum dose: 40 mg once daily.",
        interactions: "Lisinopril may interact with potassium supplements, diuretics, and certain medications used to treat diabetes.",
        warnings: "Do not take lisinopril if you are pregnant or have a history of angioedema.",
        atcCodes: ["C09AA03"],
        products: ["Zestril", "Prinivil"],
        smiles: "C1COC(=O)N1CC2CCC3CC(CCC3C2)C(=O)O"
    },
    {
        name: "Metformin",
        description: "Metformin is a medication used to treat type 2 diabetes. It helps control blood sugar levels by decreasing glucose production in the liver and improving insulin sensitivity.",
        indications: "Metformin is indicated for the treatment of type 2 diabetes mellitus.",
        sideEffects: "Common side effects of metformin include diarrhea, nausea, and abdominal discomfort.",
        dosage: "Adult dose for diabetes: Initial dose 500 mg or 850 mg once daily with meals. Maximum dose: 2000-2550 mg per day.",
        interactions: "Metformin may interact with certain medications used to treat high blood pressure or heart failure.",
        warnings: "Do not take metformin if you have severe kidney disease or metabolic acidosis.",
        atcCodes: ["A10BA02"],
        products: ["Glucophage", "Fortamet", "Glumetza"],
        smiles: "CNC(=N)NC(=N)NCCN"
    },
    {
        name: "Levothyroxine",
        description: "Levothyroxine is a synthetic form of the thyroid hormone thyroxine (T4). It is used to treat hypothyroidism (underactive thyroid) and prevent goiter (enlarged thyroid gland).",
        indications: "Levothyroxine is indicated for the treatment of hypothyroidism and prevention of goiter.",
        sideEffects: "Common side effects of levothyroxine include hair loss, weight changes, and nervousness.",
        dosage: "Adult dose for hypothyroidism: Initial dose based on age and weight. Typical maintenance dose: 50-200 mcg once daily.",
        interactions: "Levothyroxine may interact with certain medications such as antacids, iron supplements, and calcium supplements.",
        warnings: "Do not take levothyroxine if you have thyrotoxicosis or adrenal insufficiency.",
        atcCodes: ["H03AA01"],
        products: ["Synthroid", "Levoxyl", "Euthyrox"],
        smiles: "CC(CCC1=CC=CC=C1)CCC2=CC=C(O)C(I)=C2"
    },
    {
        name: "Omeprazole",
        description: "Omeprazole is a proton pump inhibitor (PPI) used to reduce stomach acid production. It is commonly used to treat gastroesophageal reflux disease (GERD) and peptic ulcers.",
        indications: "Omeprazole is indicated for the treatment of GERD, peptic ulcers, and other conditions related to excess stomach acid.",
        sideEffects: "Common side effects of omeprazole include headache, diarrhea, and abdominal pain.",
        dosage: "Adult dose for GERD: 20 mg once daily for 4-8 weeks. Maintenance dose: 20-40 mg once daily.",
        interactions: "Omeprazole may interact with certain medications such as clopidogrel, digoxin, and antifungal drugs.",
        warnings: "Do not take omeprazole if you have severe liver disease or low magnesium levels.",
        atcCodes: ["A02BC01"],
        products: ["Prilosec", "Losec", "Zegerid"],
        smiles: "COC1=C2C(=NC=C1)C(=NC=N2)S(=O)C3=CC=CC=C3"
    },
    {
        name: "Atorvastatin",
        description: "Atorvastatin is a medication used to lower cholesterol levels and reduce the risk of heart disease. It is a statin drug.",
        indications: "Atorvastatin is indicated for the treatment of high cholesterol and prevention of cardiovascular events.",
        sideEffects: "Common side effects of atorvastatin include muscle pain, diarrhea, and liver enzyme abnormalities.",
        dosage: "Adult dose for high cholesterol: Initial dose 10-20 mg once daily. Maximum dose: 80 mg once daily.",
        interactions: "Atorvastatin may interact with certain medications such as cyclosporine, gemfibrozil, and certain antibiotics.",
        warnings: "Do not take atorvastatin if you have liver disease or if you are pregnant or breastfeeding.",
        atcCodes: ["C10AA05"],
        products: ["Lipitor", "Atorva", "Sortis"],
        smiles: "CC(C)C1=CC=C(C=C1)C(C(C)CC(=O)O)C(=O)O"
    },
    {
        name: "Albuterol",
        description: "Albuterol is a bronchodilator medication used to treat asthma and chronic obstructive pulmonary disease (COPD). It relaxes the muscles in the airways, making it easier to breathe.",
        indications: "Albuterol is indicated for the treatment of asthma and COPD.",
        sideEffects: "Common side effects of albuterol include nervousness, tremor, and palpitations.",
        dosage: "Adult dose for asthma: 2.5-5 mg via nebulizer every 4-6 hours as needed. Maximum dose: 20 mg per day.",
        interactions: "Albuterol may interact with certain medications such as beta blockers, diuretics, and antidepressants.",
        warnings: "Do not exceed the recommended dose of albuterol as overdose can lead to serious side effects.",
        atcCodes: ["R03AC02"],
        products: ["Ventolin", "Proventil", "AccuNeb"],
        smiles: "CC(C)(C)NCC(O)C1=CC(=C(C=C1)O)O"
    },
    {
        name: "Metoprolol",
        description: "Metoprolol is a beta-blocker medication used to treat high blood pressure, angina, and heart failure. It works by slowing the heart rate and reducing the workload on the heart.",
        indications: "Metoprolol is indicated for the treatment of hypertension, angina, and heart failure.",
        sideEffects: "Common side effects of metoprolol include fatigue, dizziness, and low blood pressure.",
        dosage: "Adult dose for hypertension: Initial dose 25-100 mg once daily. Maximum dose: 400 mg per day.",
        interactions: "Metoprolol may interact with certain medications such as calcium channel blockers, insulin, and certain antidepressants.",
        warnings: "Do not stop taking metoprolol suddenly as it can cause rebound hypertension or angina. Avoid alcohol consumption while taking metoprolol.",
        atcCodes: ["C07AB02"],
        products: ["Lopressor", "Toprol-XL", "Betaloc"],
        smiles: "CC(C)NCC(O)COC1=CC=CC=C1"
    },
    {
        name: "Diazepam",
        description: "Diazepam is a benzodiazepine medication used to treat anxiety, seizures, and muscle spasms. It works by enhancing the effects of gamma-aminobutyric acid (GABA), a neurotransmitter that inhibits brain activity.",
        indications: "Diazepam is indicated for the treatment of anxiety disorders, alcohol withdrawal, and muscle spasms.",
        sideEffects: "Common side effects of diazepam include drowsiness, dizziness, and confusion.",
        dosage: "Adult dose for anxiety: 2-10 mg two to four times daily. Maximum dose: 30 mg per day.",
        interactions: "Diazepam may interact with certain medications such as antidepressants, antipsychotics, and opioids.",
        warnings: "Do not take diazepam if you have severe liver disease or respiratory depression. Long-term use may lead to dependence or tolerance.",
        atcCodes: ["N05BA01"],
        products: ["Valium", "Ducene", "Apaurin"],
        smiles: "CN1C2=C(C(=O)NC1=O)C=CC=C2Cl"
    },
    {
        name: "Amoxicillin",
        description: "Amoxicillin is an antibiotic medication used to treat bacterial infections such as pneumonia, bronchitis, and ear infections. It belongs to the penicillin class of antibiotics.",
        indications: "Amoxicillin is indicated for the treatment of various bacterial infections.",
        sideEffects: "Common side effects of amoxicillin include diarrhea, nausea, and rash.",
        dosage: "Adult dose for bacterial infections: 500 mg every 8 hours or 875 mg every 12 hours depending on the severity of the infection.",
        interactions: "Amoxicillin may interact with certain medications such as oral contraceptives, allopurinol, and warfarin.",
        warnings: "Do not take amoxicillin if you have a history of allergic reactions to penicillin or cephalosporins. Finish the entire course of antibiotics as prescribed.",
        atcCodes: ["J01CA04"],
        products: ["Amoxil", "Trimox", "Moxatag"],
        smiles: "CC1(C2=CC(=C(C=C2C(=O)N1)O)O)C(=O)O"
    },
    {
        name: "Citalopram",
        description: "Citalopram is an antidepressant medication used to treat depression and anxiety disorders. It belongs to the selective serotonin reuptake inhibitor (SSRI) class of drugs.",
        indications: "Citalopram is indicated for the treatment of depression and anxiety disorders.",
        sideEffects: "Common side effects of citalopram include nausea, dry mouth, and drowsiness.",
        dosage: "Adult dose for depression: 20-40 mg once daily. Maximum dose: 40 mg per day.",
        interactions: "Citalopram may interact with certain medications such as monoamine oxidase inhibitors (MAOIs) and nonsteroidal anti-inflammatory drugs (NSAIDs).",
        warnings: "Do not take citalopram if you have taken an MAOI within the past 14 days or if you are taking pimozide.",
        atcCodes: ["N06AB04"],
        products: ["Celexa", "Cipramil", "Talam"],
        smiles: "CN(C)CCOC1=CC=CC=C1C2=CC=CC=C2"
    },
    {
        name: "Hydrochlorothiazide",
        description: "Hydrochlorothiazide is a thiazide diuretic medication used to treat high blood pressure and edema (fluid retention). It works by increasing urine production, which helps lower blood pressure.",
        indications: "Hydrochlorothiazide is indicated for the treatment of hypertension and edema.",
        sideEffects: "Common side effects of hydrochlorothiazide include dizziness, headache, and increased urination.",
        dosage: "Adult dose for hypertension: 12.5-50 mg once daily. Maximum dose: 50 mg per day.",
        interactions: "Hydrochlorothiazide may interact with certain medications such as lithium, NSAIDs, and antidiabetic drugs.",
        warnings: "Do not take hydrochlorothiazide if you have severe kidney disease or electrolyte imbalances.",
        atcCodes: ["C03AA03"],
        products: ["Microzide", "HydroDIURIL", "Oretic"],
        smiles: "CC1=CC(C)=C(C(=O)NC1=S)S(=O)(=O)N"
    },
    {
        name: "Cephalexin",
        description: "Cephalexin is an antibiotic medication used to treat bacterial infections such as respiratory tract infections, skin infections, and urinary tract infections. It belongs to the cephalosporin class of antibiotics.",
        indications: "Cephalexin is indicated for the treatment of various bacterial infections.",
        sideEffects: "Common side effects of cephalexin include diarrhea, nausea, and vomiting.",
        dosage: "Adult dose for bacterial infections: 250-500 mg every 6 hours depending on the severity of the infection.",
        interactions: "Cephalexin may interact with certain medications such as oral contraceptives and probenecid.",
        warnings: "Do not take cephalexin if you have a history of allergic reactions to cephalosporins or penicillins. Finish the entire course of antibiotics as prescribed.",
        atcCodes: ["J01DB01"],
        products: ["Keflex", "Rilexine", "Ceporex"],
        smiles: "CC1=C(C(=O)NC2=C1N=C(N2)N)S(=O)(=O)O"
    },
    {
        name: "Simvastatin",
        description: "Simvastatin is a medication used to lower cholesterol levels and reduce the risk of heart disease. It is a statin drug.",
        indications: "Simvastatin is indicated for the treatment of high cholesterol and prevention of cardiovascular events.",
        sideEffects: "Common side effects of simvastatin include muscle pain, nausea, and headache.",
        dosage: "Adult dose for high cholesterol: Initial dose 10-20 mg once daily. Maximum dose: 80 mg once daily.",
        interactions: "Simvastatin may interact with certain medications such as cyclosporine, gemfibrozil, and certain antibiotics.",
        warnings: "Do not take simvastatin if you have liver disease or if you are pregnant or breastfeeding.",
        atcCodes: ["C10AA01"],
        products: ["Zocor", "Simlup", "Simcard"],
        smiles: "CC(C)C1=CC=C(C=C1)C(C)CC(=O)OC2=CC=CC=C2C(=O)O"
    },
    {
        name: "Lorazepam",
        description: "Lorazepam is a benzodiazepine medication used to treat anxiety disorders, insomnia, and seizures. It works by enhancing the effects of gamma-aminobutyric acid (GABA), a neurotransmitter that inhibits brain activity.",
        indications: "Lorazepam is indicated for the treatment of anxiety disorders, insomnia, and seizures.",
        sideEffects: "Common side effects of lorazepam include drowsiness, dizziness, and confusion.",
        dosage: "Adult dose for anxiety: 1-4 mg in divided doses. Maximum dose: 10 mg per day.",
        interactions: "Lorazepam may interact with certain medications such as antidepressants, antipsychotics, and opioids.",
        warnings: "Do not take lorazepam if you have severe liver disease or respiratory depression. Long-term use may lead to dependence or tolerance.",
        atcCodes: ["N05BA06"],
        products: ["Ativan", "Temesta", "Tavor"],
        smiles: "C1CN=C(C(=O)N1)C2=CC=CC=C2F"
    },
    {
        name: "Amitriptyline",
        description: "Amitriptyline is a tricyclic antidepressant medication used to treat depression, neuropathic pain, and migraine prophylaxis. It works by increasing the levels of certain neurotransmitters in the brain.",
        indications: "Amitriptyline is indicated for the treatment of depression, neuropathic pain, and migraine prophylaxis.",
        sideEffects: "Common side effects of amitriptyline include drowsiness, dry mouth, and constipation.",
        dosage: "Adult dose for depression: 50-150 mg once daily at bedtime. Maximum dose: 300 mg per day.",
        interactions: "Amitriptyline may interact with certain medications such as MAOIs, SSRIs, and anticholinergic drugs.",
        warnings: "Do not take amitriptyline if you have taken an MAOI within the past 14 days or if you are allergic to tricyclic antidepressants.",
        atcCodes: ["N06AA09"],
        products: ["Elavil", "Endep", "Tryptizol"],
        smiles: "CN(C)C(=O)C1=CC=CC=C1C2=CC=CC=C2"
    },
    {
        name: "Losartan",
        description: "Losartan is a medication used to treat high blood pressure and reduce the risk of stroke in patients with hypertension and left ventricular hypertrophy. It is an angiotensin II receptor antagonist.",
        indications: "Losartan is indicated for the treatment of hypertension and prevention of stroke.",
        sideEffects: "Common side effects of losartan include dizziness, headache, and upper respiratory tract infection.",
        dosage: "Adult dose for hypertension: Initial dose 50 mg once daily. Maximum dose: 100 mg once daily.",
        interactions: "Losartan may interact with certain medications such as potassium supplements, diuretics, and NSAIDs.",
        warnings: "Do not take losartan if you are pregnant or have severe kidney disease. Avoid alcohol consumption while taking losartan.",
        atcCodes: ["C09CA01"],
        products: ["Cozaar", "Hyzaar", "Lortaan"],
        smiles: "CC(C)C1=CC=C(C=C1)C(C)CC(=O)NC(C)C"
    },
    {
        name: "Tramadol",
        description: "Tramadol is an opioid analgesic medication used to treat moderate to severe pain. It works by binding to opioid receptors in the brain and spinal cord, reducing the perception of pain.",
        indications: "Tramadol is indicated for the treatment of moderate to severe pain.",
        sideEffects: "Common side effects of tramadol include nausea, dizziness, and constipation.",
        dosage: "Adult dose for pain: 50-100 mg every 4-6 hours as needed. Maximum dose: 400 mg per day.",
        interactions: "Tramadol may interact with certain medications such as SSRIs, MAOIs, and antipsychotics.",
        warnings: "Do not take tramadol if you have a history of seizures or respiratory depression. Avoid alcohol consumption while taking tramadol.",
        atcCodes: ["N02AX02"],
        products: ["Ultram", "Tramal", "Zydol"],
        smiles: "CC1(C2=CC=CC=C2C3=CC=CC=C3C4=CC=CC=C4C1)C(=O)N"
    },
    
        
        {
            name: "Amoxicillin",
            description: "Amoxicillin is an antibiotic medication used to treat bacterial infections such as pneumonia, bronchitis, and ear infections. It belongs to the penicillin class of antibiotics.",
            indications: "Amoxicillin is indicated for the treatment of various bacterial infections.",
            sideEffects: "Common side effects of amoxicillin include diarrhea, nausea, and rash.",
            dosage: "Adult dose for bacterial infections: 500 mg every 8 hours or 875 mg every 12 hours depending on the severity of the infection.",
            interactions: "Amoxicillin may interact with certain medications such as oral contraceptives, allopurinol, and warfarin.",
            warnings: "Do not take amoxicillin if you have a history of allergic reactions to penicillin or cephalosporins. Finish the entire course of antibiotics as prescribed.",
            atcCodes: ["J01CA04"],
            products: ["Amoxil", "Trimox", "Moxatag"],
            smiles: "CC1(C2=CC(=C(C=C2C(=O)N1)O)O)C(=O)O"
        },
        // New entries
        {
            name: "Clopidogrel",
            description: "Clopidogrel is an antiplatelet medication used to prevent blood clots in patients with heart disease and stroke.",
            indications: "Clopidogrel is indicated for the prevention of blood clots in patients with recent heart attack, stroke, or established peripheral arterial disease.",
            sideEffects: "Common side effects of clopidogrel include bleeding, bruising, and gastrointestinal discomfort.",
            dosage: "Adult dose: 75 mg once daily.",
            interactions: "Clopidogrel may interact with anticoagulants, NSAIDs, and certain proton pump inhibitors.",
            warnings: "Do not take clopidogrel if you have active bleeding or a history of bleeding disorders.",
            atcCodes: ["B01AC04"],
            products: ["Plavix", "Iscover", "Clopilet"],
            smiles: "CCN(CC)C(=O)C1=CC=C(C=C1)N(C)C2=CC=CC=C2C(=O)O"
        },
        {
            name: "Furosemide",
            description: "Furosemide is a loop diuretic medication used to treat edema and high blood pressure.",
            indications: "Furosemide is indicated for the treatment of edema associated with congestive heart failure, liver cirrhosis, and renal disease, as well as for hypertension.",
            sideEffects: "Common side effects of furosemide include electrolyte imbalances, dehydration, and hypotension.",
            dosage: "Adult dose for edema: 20-80 mg once or twice daily. Maximum dose: 600 mg per day.",
            interactions: "Furosemide may interact with NSAIDs, other antihypertensive drugs, and certain antibiotics.",
            warnings: "Monitor electrolyte levels regularly while taking furosemide. Do not take furosemide if you have anuria or severe electrolyte depletion.",
            atcCodes: ["C03CA01"],
            products: ["Lasix", "Fumide", "Furocot"],
            smiles: "C1=CC(=C(C=C1S(=O)(=O)N)Cl)C2=CC(=O)C=C(O2)C(=O)O"
        },
        {
            name: "Gabapentin",
            description: "Gabapentin is a medication used to treat nerve pain and seizures. It is commonly prescribed for conditions such as postherpetic neuralgia and epilepsy.",
            indications: "Gabapentin is indicated for the treatment of neuropathic pain and as an adjunctive therapy for partial seizures.",
            sideEffects: "Common side effects of gabapentin include dizziness, drowsiness, and peripheral edema.",
            dosage: "Adult dose for neuropathic pain: 300-600 mg three times daily. Maximum dose: 3600 mg per day.",
            interactions: "Gabapentin may interact with antacids and other medications that affect the central nervous system.",
            warnings: "Do not discontinue gabapentin abruptly as it may increase the risk of seizures. Use with caution in patients with renal impairment.",
            atcCodes: ["N03AX12"],
            products: ["Neurontin", "Gralise", "Horizant"],
            smiles: "C1=CC=C2C(=C1)C(=O)N(C2=O)CC3CCCN3C(=O)O"
        },
        {
            name: "Warfarin",
            description: "Warfarin is an anticoagulant medication used to prevent and treat blood clots.",
            indications: "Warfarin is indicated for the prevention and treatment of venous thrombosis, pulmonary embolism, and thromboembolic complications associated with atrial fibrillation and cardiac valve replacement.",
            sideEffects: "Common side effects of warfarin include bleeding, bruising, and gastrointestinal discomfort.",
            dosage: "Adult dose: Individualized based on INR. Typical starting dose: 2-5 mg once daily.",
            interactions: "Warfarin may interact with a wide range of medications, including NSAIDs, antibiotics, and certain antidepressants.",
            warnings: "Regular monitoring of INR is required while taking warfarin. Avoid foods high in vitamin K.",
            atcCodes: ["B01AA03"],
            products: ["Coumadin", "Jantoven", "Marevan"],
            smiles: "CC(C)(C)C1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Zolpidem",
            description: "Zolpidem is a medication used to treat insomnia. It is a non-benzodiazepine hypnotic agent.",
            indications: "Zolpidem is indicated for the short-term treatment of insomnia characterized by difficulties with sleep initiation.",
            sideEffects: "Common side effects of zolpidem include dizziness, drowsiness, and headache.",
            dosage: "Adult dose for insomnia: 5-10 mg immediately before bedtime. Maximum dose: 10 mg per day.",
            interactions: "Zolpidem may interact with other central nervous system depressants, alcohol, and certain medications used to treat depression or anxiety.",
            warnings: "Do not take zolpidem if you have a history of complex sleep behaviors. Avoid alcohol consumption while taking zolpidem.",
            atcCodes: ["N05CF02"],
            products: ["Ambien", "Stilnox", "Zolpimist"],
            smiles: "CCC1=C2C(=NC(=C1)N)C(=O)N(C2=O)C"
        },
        {
            name: "Doxycycline",
            description: "Doxycycline is an antibiotic medication used to treat a variety of bacterial infections, including respiratory tract infections, skin infections, and sexually transmitted infections.",
            indications: "Doxycycline is indicated for the treatment of various bacterial infections.",
            sideEffects: "Common side effects of doxycycline include nausea, diarrhea, and photosensitivity.",
            dosage: "Adult dose for bacterial infections: 100 mg every 12 hours on the first day, then 100 mg once daily.",
            interactions: "Doxycycline may interact with antacids, iron supplements, and certain anticonvulsants.",
            warnings: "Do not take doxycycline if you are pregnant or breastfeeding. Avoid excessive sun exposure while taking doxycycline.",
            atcCodes: ["J01AA02"],
            products: ["Vibramycin", "Doryx", "Oracea"],
            smiles: "C1=CC=C2C(=C1)C(=O)NC2=O"
        },
        {
            name: "Clonazepam",
            description: "Clonazepam is a benzodiazepine medication used to treat seizure disorders and panic disorder.",
            indications: "Clonazepam is indicated for the treatment of seizure disorders and panic disorder.",
            sideEffects: "Common side effects of clonazepam include drowsiness, dizziness, and confusion.",
            dosage: "Adult dose for seizures: 0.5-1 mg three times daily. Maximum dose: 20 mg per day.",
            interactions: "Clonazepam may interact with other central nervous system depressants, alcohol, and certain medications used to treat depression or anxiety.",
            warnings: "Do not discontinue clonazepam abruptly as it may increase the risk of seizures. Long-term use may lead to dependence or tolerance.",
            atcCodes: ["N03AE01"],
            products: ["Klonopin", "Rivotril", "Epitril"],
            smiles: "C1CN=C(C(=O)N1)C2=CC=CC=C2F"
        },
        {
            name: "Lisinopril",
            description: "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure and heart failure.",
            indications: "Lisinopril is indicated for the treatment of hypertension and heart failure, and to improve survival after a heart attack.",
            sideEffects: "Common side effects of lisinopril include dizziness, headache, and cough.",
            dosage: "Adult dose for hypertension: Initial dose 10 mg once daily. Maximum dose: 40 mg once daily.",
            interactions: "Lisinopril may interact with diuretics, potassium supplements, and NSAIDs.",
            warnings: "Do not take lisinopril if you are pregnant. Use with caution in patients with renal impairment.",
            atcCodes: ["C09AA03"],
            products: ["Zestril", "Prinivil", "Lisodur"],
            smiles: "C1=CC=C(C=C1)C(C)CC(=O)NC(CC(C)C)C(=O)O"
        },
        {
            name: "Escitalopram",
            description: "Escitalopram is an antidepressant medication used to treat depression and generalized anxiety disorder. It is a selective serotonin reuptake inhibitor (SSRI).",
            indications: "Escitalopram is indicated for the treatment of major depressive disorder and generalized anxiety disorder.",
            sideEffects: "Common side effects of escitalopram include nausea, insomnia, and dry mouth.",
            dosage: "Adult dose for depression: 10-20 mg once daily. Maximum dose: 20 mg per day.",
            interactions: "Escitalopram may interact with monoamine oxidase inhibitors (MAOIs), NSAIDs, and other serotonergic drugs.",
            warnings: "Do not take escitalopram if you have taken an MAOI within the past 14 days. Use with caution in patients with a history of bipolar disorder.",
            atcCodes: ["N06AB10"],
            products: ["Lexapro", "Cipralex", "Seroplex"],
            smiles: "CN(C)CCOC1=CC=CC=C1C2=CC=CC=C2"
        },
        {
            name: "Levothyroxine",
            description: "Levothyroxine is a synthetic form of the thyroid hormone used to treat hypothyroidism.",
            indications: "Levothyroxine is indicated for the treatment of hypothyroidism and for the suppression of thyroid-stimulating hormone (TSH).",
            sideEffects: "Common side effects of levothyroxine include headache, nervousness, and sweating.",
            dosage: "Adult dose for hypothyroidism: Initial dose 25-50 mcg once daily. Maximum dose: individualized based on TSH levels.",
            interactions: "Levothyroxine may interact with certain antacids, iron supplements, and calcium supplements.",
            warnings: "Do not take levothyroxine if you have uncorrected adrenal insufficiency. Use with caution in patients with cardiovascular disease.",
            atcCodes: ["H03AA01"],
            products: ["Synthroid", "Euthyrox", "Levothroid"],
            smiles: "CC1=C(C(=O)NC2=C1N=C(N2)N)S(=O)(=O)O"
        },
        {
            name: "Sertraline",
            description: "Sertraline is an antidepressant medication used to treat depression, anxiety disorders, and obsessive-compulsive disorder (OCD). It is a selective serotonin reuptake inhibitor (SSRI).",
            indications: "Sertraline is indicated for the treatment of major depressive disorder, panic disorder, and OCD.",
            sideEffects: "Common side effects of sertraline include nausea, insomnia, and sexual dysfunction.",
            dosage: "Adult dose for depression: 50-200 mg once daily. Maximum dose: 200 mg per day.",
            interactions: "Sertraline may interact with monoamine oxidase inhibitors (MAOIs), NSAIDs, and other serotonergic drugs.",
            warnings: "Do not take sertraline if you have taken an MAOI within the past 14 days. Use with caution in patients with a history of bipolar disorder.",
            atcCodes: ["N06AB06"],
            products: ["Zoloft", "Lustral", "Serlain"],
            smiles: "CN(C)CCOC1=CC=CC=C1C2=CC=CC=C2"
        },
        {
            name: "Fluoxetine",
            description: "Fluoxetine is an antidepressant medication used to treat depression, obsessive-compulsive disorder (OCD), and panic disorder. It is a selective serotonin reuptake inhibitor (SSRI).",
            indications: "Fluoxetine is indicated for the treatment of major depressive disorder, OCD, and panic disorder.",
            sideEffects: "Common side effects of fluoxetine include nausea, insomnia, and headache.",
            dosage: "Adult dose for depression: 20-60 mg once daily. Maximum dose: 80 mg per day.",
            interactions: "Fluoxetine may interact with monoamine oxidase inhibitors (MAOIs), NSAIDs, and other serotonergic drugs.",
            warnings: "Do not take fluoxetine if you have taken an MAOI within the past 14 days. Use with caution in patients with a history of bipolar disorder.",
            atcCodes: ["N06AB03"],
            products: ["Prozac", "Sarafem", "Fludac"],
            smiles: "CN(C)CCOC1=CC=CC=C1C2=CC=CC=C2"
        },
        {
            name: "Omeprazole",
            description: "Omeprazole is a proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD), peptic ulcers, and other acid-related stomach issues.",
            indications: "Omeprazole is indicated for the treatment of GERD, peptic ulcers, and Zollinger-Ellison syndrome.",
            sideEffects: "Common side effects of omeprazole include headache, diarrhea, and nausea.",
            dosage: "Adult dose for GERD: 20-40 mg once daily for 4-8 weeks. Maximum dose: 40 mg per day.",
            interactions: "Omeprazole may interact with certain antiretroviral drugs, clopidogrel, and warfarin.",
            warnings: "Do not take omeprazole if you are allergic to it or other PPIs. Use with caution in patients with severe liver disease.",
            atcCodes: ["A02BC01"],
            products: ["Prilosec", "Losec", "Omez"],
            smiles: "CC(C)C1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Amlodipine",
            description: "Amlodipine is a calcium channel blocker used to treat high blood pressure and angina.",
            indications: "Amlodipine is indicated for the treatment of hypertension and angina.",
            sideEffects: "Common side effects of amlodipine include swelling, dizziness, and flushing.",
            dosage: "Adult dose for hypertension: 5-10 mg once daily. Maximum dose: 10 mg per day.",
            interactions: "Amlodipine may interact with other antihypertensive drugs, CYP3A4 inhibitors, and certain antifungal drugs.",
            warnings: "Do not take amlodipine if you are allergic to it. Use with caution in patients with severe hepatic impairment.",
            atcCodes: ["C08CA01"],
            products: ["Norvasc", "Amlocard", "Amlor"],
            smiles: "CC(C)C1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Ibuprofen",
            description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, fever, and inflammation.",
            indications: "Ibuprofen is indicated for the treatment of mild to moderate pain, fever, and inflammation.",
            sideEffects: "Common side effects of ibuprofen include stomach upset, nausea, and dizziness.",
            dosage: "Adult dose for pain/fever: 200-400 mg every 4-6 hours as needed. Maximum daily dose: 1200 mg.",
            interactions: "Ibuprofen may interact with anticoagulants, other NSAIDs, and certain antihypertensive drugs.",
            warnings: "Do not take ibuprofen if you have a history of stomach ulcers or bleeding disorders. Use with caution in patients with cardiovascular disease.",
            atcCodes: ["M01AE01"],
            products: ["Advil", "Motrin", "Nurofen"],
            smiles: "CC(C)C1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Metformin",
            description: "Metformin is an oral antidiabetic medication used to treat type 2 diabetes. It helps control blood sugar levels.",
            indications: "Metformin is indicated for the treatment of type 2 diabetes mellitus.",
            sideEffects: "Common side effects of metformin include gastrointestinal discomfort, diarrhea, and nausea.",
            dosage: "Adult dose for type 2 diabetes: 500-1000 mg twice daily. Maximum dose: 2000 mg per day.",
            interactions: "Metformin may interact with certain medications used to treat high blood pressure, diuretics, and other antidiabetic drugs.",
            warnings: "Do not take metformin if you have severe renal impairment or metabolic acidosis. Monitor renal function regularly.",
            atcCodes: ["A10BA02"],
            products: ["Glucophage", "Fortamet", "Glumetza"],
            smiles: "C1CN=C(C(=O)N1)C2=CC=CC=C2F"
        },
        {
            name: "Prednisone",
            description: "Prednisone is a corticosteroid medication used to treat inflammatory and autoimmune conditions, as well as some types of cancer.",
            indications: "Prednisone is indicated for the treatment of various inflammatory and autoimmune conditions.",
            sideEffects: "Common side effects of prednisone include weight gain, increased appetite, and mood changes.",
            dosage: "Adult dose: Varies based on condition, typically 5-60 mg once daily.",
            interactions: "Prednisone may interact with certain antifungal drugs, anticoagulants, and other immunosuppressants.",
            warnings: "Do not discontinue prednisone abruptly. Use with caution in patients with infections or diabetes.",
            atcCodes: ["H02AB07"],
            products: ["Deltasone", "Rayos", "Prednicot"],
            smiles: "CC1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Simvastatin",
            description: "Simvastatin is a lipid-lowering medication used to treat high cholesterol and reduce the risk of cardiovascular disease.",
            indications: "Simvastatin is indicated for the treatment of hyperlipidemia and prevention of cardiovascular disease.",
            sideEffects: "Common side effects of simvastatin include headache, nausea, and muscle pain.",
            dosage: "Adult dose for hyperlipidemia: 10-40 mg once daily in the evening. Maximum dose: 40 mg per day.",
            interactions: "Simvastatin may interact with certain antifungal drugs, anticoagulants, and other lipid-lowering medications.",
            warnings: "Do not take simvastatin if you have active liver disease. Monitor liver function tests regularly.",
            atcCodes: ["C10AA01"],
            products: ["Zocor", "Simlup", "Simvacor"],
            smiles: "CC(C)C1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Hydrochlorothiazide",
            description: "Hydrochlorothiazide is a diuretic medication used to treat high blood pressure and edema.",
            indications: "Hydrochlorothiazide is indicated for the treatment of hypertension and edema associated with various conditions.",
            sideEffects: "Common side effects of hydrochlorothiazide include electrolyte imbalances, dizziness, and increased urination.",
            dosage: "Adult dose for hypertension: 25-50 mg once daily. Maximum dose: 100 mg per day.",
            interactions: "Hydrochlorothiazide may interact with other antihypertensive drugs, NSAIDs, and certain diabetes medications.",
            warnings: "Monitor electrolyte levels regularly while taking hydrochlorothiazide. Use with caution in patients with severe renal impairment.",
            atcCodes: ["C03AA03"],
            products: ["Microzide", "Hydrodiuril", "Oretic"],
            smiles: "CC1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Citalopram",
            description: "Citalopram is an antidepressant medication used to treat depression. It is a selective serotonin reuptake inhibitor (SSRI).",
            indications: "Citalopram is indicated for the treatment of major depressive disorder.",
            sideEffects: "Common side effects of citalopram include nausea, dry mouth, and drowsiness.",
            dosage: "Adult dose for depression: 20-40 mg once daily. Maximum dose: 40 mg per day.",
            interactions: "Citalopram may interact with monoamine oxidase inhibitors (MAOIs), NSAIDs, and other serotonergic drugs.",
            warnings: "Do not take citalopram if you have taken an MAOI within the past 14 days. Use with caution in patients with a history of bipolar disorder.",
            atcCodes: ["N06AB04"],
            products: ["Celexa", "Cipramil", "Ciazil"],
            smiles: "CN(C)CCOC1=CC=CC=C1C2=CC=CC=C2"
        },
        {
            name: "Lorazepam",
            description: "Lorazepam is a benzodiazepine medication used to treat anxiety disorders and insomnia.",
            indications: "Lorazepam is indicated for the treatment of anxiety disorders and insomnia.",
            sideEffects: "Common side effects of lorazepam include drowsiness, dizziness, and weakness.",
            dosage: "Adult dose for anxiety: 1-3 mg two to three times daily. Maximum dose: 10 mg per day.",
            interactions: "Lorazepam may interact with other central nervous system depressants, alcohol, and certain medications used to treat depression or anxiety.",
            warnings: "Do not discontinue lorazepam abruptly as it may increase the risk of withdrawal symptoms. Long-term use may lead to dependence or tolerance.",
            atcCodes: ["N05BA06"],
            products: ["Ativan", "Lorazepam Intensol", "Loraz"],
            smiles: "C1CN=C(C(=O)N1)C2=CC=CC=C2F"
        },
        {
            name: "Venlafaxine",
            description: "Venlafaxine is an antidepressant medication used to treat depression and anxiety disorders. It is a serotonin-norepinephrine reuptake inhibitor (SNRI).",
            indications: "Venlafaxine is indicated for the treatment of major depressive disorder and generalized anxiety disorder.",
            sideEffects: "Common side effects of venlafaxine include nausea, dry mouth, and insomnia.",
            dosage: "Adult dose for depression: 75-225 mg once daily. Maximum dose: 225 mg per day.",
            interactions: "Venlafaxine may interact with monoamine oxidase inhibitors (MAOIs), NSAIDs, and other serotonergic drugs.",
            warnings: "Do not take venlafaxine if you have taken an MAOI within the past 14 days. Use with caution in patients with a history of bipolar disorder.",
            atcCodes: ["N06AX16"],
            products: ["Effexor", "Viepax", "Trevilor"],
            smiles: "CN(C)CCOC1=CC=CC=C1C2=CC=CC=C2"
        },
        {
            name: "Metoprolol",
            description: "Metoprolol is a beta-blocker medication used to treat high blood pressure, angina, and heart failure.",
            indications: "Metoprolol is indicated for the treatment of hypertension, angina, and heart failure.",
            sideEffects: "Common side effects of metoprolol include dizziness, fatigue, and bradycardia.",
            dosage: "Adult dose for hypertension: 50-100 mg once daily. Maximum dose: 400 mg per day.",
            interactions: "Metoprolol may interact with other antihypertensive drugs, NSAIDs, and certain medications used to treat arrhythmias.",
            warnings: "Do not discontinue metoprolol abruptly. Use with caution in patients with asthma or chronic obstructive pulmonary disease.",
            atcCodes: ["C07AB02"],
            products: ["Lopressor", "Toprol", "Betaloc"],
            smiles: "C1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Clindamycin",
            description: "Clindamycin is an antibiotic medication used to treat a variety of bacterial infections, including respiratory tract infections, skin infections, and intra-abdominal infections.",
            indications: "Clindamycin is indicated for the treatment of various bacterial infections.",
            sideEffects: "Common side effects of clindamycin include nausea, diarrhea, and rash.",
            dosage: "Adult dose for bacterial infections: 150-450 mg every 6-8 hours. Maximum dose: 1800 mg per day.",
            interactions: "Clindamycin may interact with certain neuromuscular blocking agents and erythromycin.",
            warnings: "Do not take clindamycin if you have a history of antibiotic-associated colitis. Use with caution in patients with hepatic impairment.",
            atcCodes: ["J01FF01"],
            products: ["Cleocin", "Clindagel", "Dalacin"],
            smiles: "CC1=CC=C(C=C1)C(C)CC(=O)O"
        },
        {
            name: "Hydrocodone",
            description: "Hydrocodone is an opioid analgesic medication used to treat moderate to severe pain.",
            indications: "Hydrocodone is indicated for the treatment of moderate to severe pain.",
            sideEffects: "Common side effects of hydrocodone include drowsiness, dizziness, and constipation.",
            dosage: "Adult dose for pain: 5-10 mg every 4-6 hours as needed. Maximum dose: 60 mg per day.",
            interactions: "Hydrocodone may interact with other central nervous system depressants, alcohol, and certain medications used to treat depression or anxiety.",
            warnings: "Do not take hydrocodone if you have severe respiratory depression. Long-term use may lead to dependence or tolerance.",
            atcCodes: ["N02AA03"],
            products: ["Vicodin", "Norco", "Lortab"],
            smiles: "CC1=CC=C(C=C1)C(C)CC(=O)O"
        }
    
];



    
 



// Function to simulate fetching drug information from a database
function fetchDrugInfo(drugName) {
    drugName = drugName.trim().toLowerCase();
    
    const drug = drugs.find(drug => drug.name.toLowerCase() === drugName);

    return drug || null;
}

function displayDrugInfo(drugInfo) {
    const drugInfoSection = document.getElementById("drug-info-section");
    if (drugInfo) {
        drugInfoSection.innerHTML = `
            <h2 style="font-size: 40px;font-weight: bolder;color:crimson">${drugInfo.name}</h2>
            <br>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">Description:</strong> ${drugInfo.description}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">Indications:</strong> ${drugInfo.indications}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">Side Effects:</strong> ${drugInfo.sideEffects}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">Dosage:</strong> ${drugInfo.dosage}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">Warnings:</strong> ${drugInfo.warnings}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">ATC Codes:</strong> ${drugInfo.atcCodes}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">Products:</strong> ${drugInfo.products}</p>
            <p style="font-size: 20px;margin-top: 3px;"><strong style="font-size: 25px;font-weight: bolder;color:crimson">SMILES:</strong> ${drugInfo.smiles}</p>
            <br>
            <p style="font-size: 10px;"><strong style="font-size: 20px;">Read more...</strong></p>`;

        speakDrugInfo(drugInfo);
    } else {
        drugInfoSection.innerHTML = '<p class="error-message">Drug information not found.</p>';
        const speech = new SpeechSynthesisUtterance('Drug information not found');
        window.speechSynthesis.speak(speech);
    }
}

function speakDrugInfo(drugInfo) {
    let speechText = `
        Here is the information for the drug ${drugInfo.name}.
        Description: ${drugInfo.description}.
        Indications: ${drugInfo.indications}.
        Side Effects: ${drugInfo.sideEffects}.
        Dosage: ${drugInfo.dosage}.
        Warnings: ${drugInfo.warnings}.
        `;
    const speech = new SpeechSynthesisUtterance(speechText);

    window.speechSynthesis.speak(speech);
}



function searchDrug() {
    const searchInput = document.getElementById("search-input");
    const drugName = searchInput.value.trim();

    if (drugName === "") {
        const message = "Please enter a drug name.";
        alert(message);
        
        const speech = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(speech);
        
        return;
    }

    const drugInfoSection = document.getElementById("drug-info-section");
    drugInfoSection.innerHTML = '<div class="loader"></div>';

    setTimeout(() => {
        const drugInfo = fetchDrugInfo(drugName);
        displayDrugInfo(drugInfo);
    }, 1000);
}

document.getElementById("search-button").addEventListener("click", searchDrug);

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchDrug();
    }
});

document.addEventListener('contextmenu',

    function (event) {
    
    event.preventDefault();
})

document.getElementById

('contact-form').addEventListener

('submit', function (event) {

event.preventDefault();

var data = new FormData (event.target);

fetch("URL", {

    method: 'POST',

    body: data,

}).then(response => {

    if (response.ok) {
        alert('Success');

} else {
    alert('Error');

}

});

document.getElementById

('contact-form').reset();

});
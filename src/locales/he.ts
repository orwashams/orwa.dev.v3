export default {
  owner: {
    shortname: "ערוּה",
    name: "ערוּה שמס",
    description: "אני אפתח את המוצר הדיגיטלי שלך שתמיד חלמת עליו",
    developer:
      "אתרי אינטרנט🌐, אפליקציות📱 ופתרונות תוכנה שעונים על הצרכים הספציפיים שלך",
  },
  general: {
    name: "שם",
    description: "תיאור",
    examples: "דוגמאות",
    link: "קישור",
    pick: "אתה יכול לבחור אפשרות מלמטה",
    or_pick_custom: "או שאתה יכול לבקש פתרון תוכנה מותאם אישית",
  },
  form: {
    your_name: "השם שלך",
    your_email: "אימייל שלך",
    your_phone: "מספר הטלפון שלך",
    details: "פרטים",
    note: "אנא כלול מידע רב ככל האפשר",
    send: "שלח",
    sending: "שולח...",
    descriptions: {
      name: "מ-2 ל-50 תווים",
      email: "דוגמא: johndoe@example.com",
      phone: "דוגמא: 0501234567",
      details: "מ-10 ל-5000 תווים",
    },
  },

  toast_success: {
    title: "הודעה נשלחה בהצלחה",
    description: "תודה שבחרתם בנו, אחזור אליכם בהקדם האפשרי!",
  },
  toast_error: {
    title: "אופס!",
    description: "משהו השתבש",
  },

  templates: {
    custom: {
      name: "התאמה אישית",
      description: "פתרון תוכנה מותאם אישית, המבוסס על הצרכים הספציפיים שלך",
    },
    e_commerce: {
      name: "אתר מסחר אלקטרוני",
      description: "פלטפורמות מקוונות לקנייה ומכירה של מוצרים או שירותים",
      examples: {
        amazon: {
          name: "אמזון",
          description: "שוק מקוון לקנייה ומכירה של מוצרים שונים",
          link: "https://www.amazon.com/",
        },
        hoddies: {
          name: "הודיס",
          description: "בגדים ואביזרים לגברים ולנשים",
          link: "https://www.hoodies.co.il/",
        },
        space_posters: {
          name: "כרזות חלל",
          description: "פוסטרים עם תמונות הקשורות לחלל",
          link: "https://www.spaceposters.co/",
        },
      },
    },
    social_media: {
      name: "רשת חברתית",
      description: "אתרים המאפשרים אינטראקציה חברתית ושיתוף תוכן",
      examples: {
        facebook: {
          name: "פייסבוק",
          description: "מדיה חברתית מקוונת ושירות רשתות חברתיות",
          link: "https://www.facebook.com/",
        },
        twitter: {
          name: "טוויטר",
          description:
            "הידועה כיום בשם X, היא רשת חברתית. ב-X, משתמשים רשומים יכולים לפרסם טקסט, תמונות וסרטונים",
          link: "https://www.twitter.com/",
        },
        instagram: {
          name: "אינסטגרם",
          description: "שירות מקוון לשיתוף תמונות וסרטונים",
          link: "https://www.instagram.com/",
        },
      },
    },
    personal_website: {
      name: "בלוג / אתר אישי",
      description: "פלטפורמות אישיות או ארגוניות לשיתוף מידע או דעות",
      examples: {
        medium: {
          name: "מידיום",
          description: "פלטפורמה פשוטה לכתיבת מאמרים ומחשבות",
          link: "https://medium.com/",
        },
        theo_blog: {
          name: "בלוג תיאו בראון",
          description: `בלוג מאת Theo Browne, יוצר תוכן, מייסד ומנכ"ל Ping Labs-ping.gg`,
          link: "https://t3.gg/blog",
        },
        rauchg_blog: {
          name: "בלוג גיירמו ראוך",
          description: `בלוג מאת גיירמו ראוך, מנכ"ל vercel והיוצר המקורי של Next.js`,
          link: "https://rauchg.com/",
        },
      },
    },
    news_media_website: {
      name: "אתר חדשות ומדיה",
      description: "אתרים המציעים חדשות, מאמרים ותוכן מולטימדיה",
      examples: {
        cnn: {
          name: "CNN",
          description: "ערוץ חדשות רב לאומי",
          link: "https://www.cnn.com/",
        },
        walla: {
          name: "וואלה! חדשות",
          description: "שירות ישראלי לחדשות ומידע",
          link: "https://news.walla.co.il/",
        },
        skynewsarabia: {
          name: "סקיי ניוז ערביה",
          description:
            "סקיי ניוז ערביה הוא ערוץ חדשות ערבי 24 שעות ביממה המשודר בעיקר במזרח התיכון ובצפון אפריקה",
          link: "https://www.skynewsarabia.com/",
        },
      },
    },
    portfolio_website: {
      name: "אתר פורטפוליו",
      description: "אתרים אישיים או מקצועיים להצגת הפרויקטים שלך",
      examples: {
        bruno_simon: {
          name: "פורטפוליו של ברונו סיימון",
          description:
            "אולי אתר הפורטפוליו המפורסם ביותר, אתה באמת יכול לנהוג במכונית וירטואלית בין הפרויקטים והניסיון שלו באמצעות מקלדת",
          link: "https://bruno-simon.com/",
        },
        yui_moreau: {
          name: "פורטפוליו יואי מורו",
          description:
            "נולד בסיאול, שבסיסו בפריז, ליואי מורו יש אתר פורטפוליו שמושך את תשומת הלב שלך מהצד עם מונטאז' הרקע המרהיב שלו של וידאו רטרו",
          link: "https://y78.fr/",
        },
        jessica_hernandez: {
          name: "פורטפוליו ג'סיקה הרננדז",
          description:
            "אם אתה מחפש דוגמה מצוינת לתיק פורטפוליו שנותן רושם ראשוני טוב, זה אחד שאתה בהחלט צריך לבדוק",
          link: "https://www.jessicahernandez.me/",
        },
      },
    },
    corporate_website: {
      name: "אתר לחברות",
      description: "נוכחות מקוונת לעסקים, לרוב כולל מידע ושירותים של החברה",
      examples: {
        pienso: {
          name: "Pienso",
          description:
            "Pienso היא פלטפורמת הבינה המלאכותית האינטראקטיבית שכל אחד יכול להשתמש בו כדי להפוך נתוני טקסט לתובנות, ללא צורך בכתיבת קוד",
          link: "https://pienso.com/",
        },
        nvidia: {
          name: "Nvidia",
          description:
            "Nvidia, Inc. ממציאה את ה-GPU ומניעה התקדמות ב-AI, HPC, משחקים, עיצוב יצירתי, רכבים אוטונומיים ורובוטיקה",
          link: "https://www.nvidia.com/",
        },
        asus: {
          name: "ASUS",
          description:
            "ASUSTeK Computer Inc. היא חברת חומרת מחשב ואלקטרוניקה צרכנית רב-לאומית טייוואנית",
          link: "https://www.asus.com/",
        },
      },
    },
    government_website: {
      name: "אתר ממשלתי",
      description: "אתרים רשמיים לרשויות ממשלתיות, המספקים מידע ושירותים",
      examples: {
        nasa: {
          name: 'נאס"א',
          description: "מינהל האווירונאוטיקה והחלל הלאומי",
          link: "https://www.nasa.gov/",
        },
        nygov: {
          name: "ממשלת ניו יורק",
          description: "האתר הממשלתי של העיר ניו יורק",
          link: "https://www1.nyc.gov/",
        },
        fbi: {
          name: "FBI",
          description: "הבולשת הפדרלית לחקירה",
          link: "https://www.fbi.gov/",
        },
      },
    },
    web_application: {
      name: "יישום אינטרנט",
      description:
        "יישומים אינטראקטיביים אליהם ניתן לגשת דרך דפדפן אינטרנט, החל ממייל ועד כלי ניהול פרויקטים",
      examples: {
        excalidraw: {
          name: "Excalidraw",
          description:
            "אפליקציה מקוונת לציור המאפשרת למשתמשים לצייר על לוח לבן",
          link: "https://excalidraw.com/",
        },
        chatgpt: {
          name: "ChatGPT",
          description: "ChatGPT הוא מודל שפה גדול שפותח על ידי OpenAI",
          link: "https://chat.openai.com/",
        },
        chessdotcom: {
          name: "Chess.com",
          description: "פלטפורמת השחמט המקוונת הגדולה בעולם",
          link: "https://www.chess.com/",
        },
      },
    },
    forums_and_communities: {
      name: "פורומים וקהילות",
      description: "פורומים או קהילות מקוונים לשיתוף מידע, דעות ודיונים",
      examples: {
        piratesoftware: {
          name: "Pirate Software Community",
          description: "הקהילה הטובה ביותר עבור מפתחי משחקים וחובבי משחקים",
          link: "https://develop.games/",
        },
        reddit: {
          name: "Reddit",
          description: "צבירה של חדשות חברתיות, דירוג תוכן אינטרנט ואתר דיונים",
          link: "https://www.reddit.com/",
        },
        stack_overflow: {
          name: "Stack Overflow",
          description: "אתר שאלות ותשובות למתכנתים מקצועיים ונלהבים",
          link: "https://stackoverflow.com/",
        },
      },
    },
    booking_reservation_system: {
      name: "מערכת הזמנות",
      description: "מערכות לשירותי הזמנות בתי מלון",
      examples: {
        airbnb: {
          name: "Airbnb",
          description: "שוק מקוון לשירותי הזמנות",
          link: "https://www.airbnb.com/",
        },
        bookingdotcom: {
          name: "Booking",
          description: "Booking.com היא ספקית שירותי הזמנת מלונות מקוונת",
          link: "https://www.booking.com/",
        },
        tripadvisor: {
          name: "Tripadvisor",
          description:
            "Tripadvisor היא חברה המפעילה סוכנויות נסיעות מקוונות, אתרי השוואת קניות ואפליקציות לנייד עם תוכן שנוצר על ידי משתמשים",
          link: "https://www.tripadvisor.com/",
        },
      },
    },
    utility_website: {
      name: "אתר שירות",
      description:
        "כלים ושירותים העונים על צרכים ספציפיים, כגון תחזיות מזג אוויר או ממירי מטבעות",
      examples: {
        weather: {
          name: "Weather",
          description: "תחזית מזג אוויר ומידע",
          link: "https://weather.com/",
        },
        currency: {
          name: "Xe",
          description: "מספק ממירי מטבעות ומידע",
          link: "https://www.xe.com/",
        },
        online_converter: {
          name: "YPAY",
          description: "הפקת חשבוניות דיגיטליות",
          link: "https://ypay.co.il/",
        },
      },
    },
    real_estate_website: {
      name: 'אתר נדל"ן',
      description: 'אתרים לקנייה, מכירה וניהול נכסי נדל"ן',
      examples: {
        zillow: {
          name: "Zillow",
          description: 'אתר נדל"ן לקנייה ומכירה של בתים ונכסים',
          link: "https://www.zillow.com/",
        },
        realtor: {
          name: "Realtor",
          description: 'אתר נדל"ן לקנייה ומכירה של נכסים',
          link: "https://www.realtor.com/",
        },
        remax_israel: {
          name: "רימקס ישראל",
          description: 'RE/MAX היא רשת תיווך נדל"ן בינלאומית',
          link: "https://www.remax-israel.com/",
        },
      },
    },
  },
} as const;

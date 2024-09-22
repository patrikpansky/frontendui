import {
    createBrowserRouter,
    RouterProvider,
    // useRouteError,
  } from "react-router-dom";

//  Event: Event
//  Eventpresence: Presence
//  Eventtype: EventType
//  Eventpresencetype: PresenceType
//  Eventinvitationtype: InvitationType
//  Externalidtype: ExternalIdType
//  Facility: Facility
//  Facilitytype: FacilityType
//  Request: Request
//  Formhistory: RequestHistory
//  Form: Form
//  Formtype: FormType
//  Formcategory: FormCategory
//  Formsection: FormSection
//  Formpart: FormPart
//  Formitem: FormItem
//  Formitemtype: FormItemType
//  Formitemcategory: FormItemCategory
//  Acprogram: AcProgram
//  Acprogramtype: AcProgramType
//  Acprogramtitletype: AcProgramTitleType
//  Acprogramlanguagetype: AcProgramLanguageType
//  Acprogramleveltype: AcProgramLevelType
//  Acprogramformtype: AcProgramFormType
//  Acsubject: AcSubject
//  Acsemester: AcSemester
//  Actopic: AcTopic
//  Aclesson: AcLesson
//  Acclassification: AcClassification
//  Acclassificationlevel: AcClassificationLevel
//  Acclassificationtype: AcClassificationType
//  Aclessontype: AcLessonType
//  Acprogramstudentstate: AcProgramStudentState
//  Acprogramstudent: AcProgramStudent
//  Acprogrammessage: AcProgramMessage
//  Plan: Plan
//  Plannedlesson: PlannedLesson
//  Financecategory: FinanceCategory
//  Finance: Finance
//  Financetype: FinanceType
//  Milestone: Milestone
//  Projectcategory: ProjectCategory
//  Project: Project
//  Projecttype: ProjectType
//  Statementofwork: StatementOfWork
//  Publication: Publication
//  Publicationtype: PublicationType
//  Author: PublicationAuthor
//  Surveytype: SurveyType
//  Survey: Survey
//  Answer: Answer
//  Question: Question
//  Questiontype: QuestionType
//  User: User
//  Group: Group
//  Roletype: RoleType
//  Rolecategory: RoleCategory
//  Grouptype: GroupType
//  Groupcategory: GroupCategory
//  Role: Role
//  Rbac: RBACObject
//  Membership: Membership
//  Roletypelist: RoleTypeList
//  State: State
//  Statemachine: StateMachine
//  Statetransition: StateTransition
  

import { EventPage } from "./Pages/Event/EventPage";
import { EventEditPage } from "./Pages/Event/EventEditPage";
import { EventpresencePage } from "./Pages/Eventpresence/EventpresencePage";
import { EventpresenceEditPage } from "./Pages/Eventpresence/EventpresenceEditPage";
import { EventtypePage } from "./Pages/Eventtype/EventtypePage";
import { EventtypeEditPage } from "./Pages/Eventtype/EventtypeEditPage";
import { EventpresencetypePage } from "./Pages/Eventpresencetype/EventpresencetypePage";
import { EventpresencetypeEditPage } from "./Pages/Eventpresencetype/EventpresencetypeEditPage";
import { EventinvitationtypePage } from "./Pages/Eventinvitationtype/EventinvitationtypePage";
import { EventinvitationtypeEditPage } from "./Pages/Eventinvitationtype/EventinvitationtypeEditPage";
import { ExternalidtypePage } from "./Pages/Externalidtype/ExternalidtypePage";
import { ExternalidtypeEditPage } from "./Pages/Externalidtype/ExternalidtypeEditPage";
import { FacilityPage } from "./Pages/Facility/FacilityPage";
import { FacilityEditPage } from "./Pages/Facility/FacilityEditPage";
import { FacilitytypePage } from "./Pages/Facilitytype/FacilitytypePage";
import { FacilitytypeEditPage } from "./Pages/Facilitytype/FacilitytypeEditPage";
import { RequestPage } from "./Pages/Request/RequestPage";
import { RequestEditPage } from "./Pages/Request/RequestEditPage";
import { FormhistoryPage } from "./Pages/Formhistory/FormhistoryPage";
import { FormhistoryEditPage } from "./Pages/Formhistory/FormhistoryEditPage";
import { FormPage } from "./Pages/Form/FormPage";
import { FormEditPage } from "./Pages/Form/FormEditPage";
import { FormtypePage } from "./Pages/Formtype/FormtypePage";
import { FormtypeEditPage } from "./Pages/Formtype/FormtypeEditPage";
import { FormcategoryPage } from "./Pages/Formcategory/FormcategoryPage";
import { FormcategoryEditPage } from "./Pages/Formcategory/FormcategoryEditPage";
import { FormsectionPage } from "./Pages/Formsection/FormsectionPage";
import { FormsectionEditPage } from "./Pages/Formsection/FormsectionEditPage";
import { FormpartPage } from "./Pages/Formpart/FormpartPage";
import { FormpartEditPage } from "./Pages/Formpart/FormpartEditPage";
import { FormitemPage } from "./Pages/Formitem/FormitemPage";
import { FormitemEditPage } from "./Pages/Formitem/FormitemEditPage";
import { FormitemtypePage } from "./Pages/Formitemtype/FormitemtypePage";
import { FormitemtypeEditPage } from "./Pages/Formitemtype/FormitemtypeEditPage";
import { FormitemcategoryPage } from "./Pages/Formitemcategory/FormitemcategoryPage";
import { FormitemcategoryEditPage } from "./Pages/Formitemcategory/FormitemcategoryEditPage";
import { AcprogramPage } from "./Pages/Acprogram/AcprogramPage";
import { AcprogramEditPage } from "./Pages/Acprogram/AcprogramEditPage";
import { AcprogramtypePage } from "./Pages/Acprogramtype/AcprogramtypePage";
import { AcprogramtypeEditPage } from "./Pages/Acprogramtype/AcprogramtypeEditPage";
import { AcprogramtitletypePage } from "./Pages/Acprogramtitletype/AcprogramtitletypePage";
import { AcprogramtitletypeEditPage } from "./Pages/Acprogramtitletype/AcprogramtitletypeEditPage";
import { AcprogramlanguagetypePage } from "./Pages/Acprogramlanguagetype/AcprogramlanguagetypePage";
import { AcprogramlanguagetypeEditPage } from "./Pages/Acprogramlanguagetype/AcprogramlanguagetypeEditPage";
import { AcprogramleveltypePage } from "./Pages/Acprogramleveltype/AcprogramleveltypePage";
import { AcprogramleveltypeEditPage } from "./Pages/Acprogramleveltype/AcprogramleveltypeEditPage";
import { AcprogramformtypePage } from "./Pages/Acprogramformtype/AcprogramformtypePage";
import { AcprogramformtypeEditPage } from "./Pages/Acprogramformtype/AcprogramformtypeEditPage";
import { AcsubjectPage } from "./Pages/Acsubject/AcsubjectPage";
import { AcsubjectEditPage } from "./Pages/Acsubject/AcsubjectEditPage";
import { AcsemesterPage } from "./Pages/Acsemester/AcsemesterPage";
import { AcsemesterEditPage } from "./Pages/Acsemester/AcsemesterEditPage";
import { ActopicPage } from "./Pages/Actopic/ActopicPage";
import { ActopicEditPage } from "./Pages/Actopic/ActopicEditPage";
import { AclessonPage } from "./Pages/Aclesson/AclessonPage";
import { AclessonEditPage } from "./Pages/Aclesson/AclessonEditPage";
import { AcclassificationPage } from "./Pages/Acclassification/AcclassificationPage";
import { AcclassificationEditPage } from "./Pages/Acclassification/AcclassificationEditPage";
import { AcclassificationlevelPage } from "./Pages/Acclassificationlevel/AcclassificationlevelPage";
import { AcclassificationlevelEditPage } from "./Pages/Acclassificationlevel/AcclassificationlevelEditPage";
import { AcclassificationtypePage } from "./Pages/Acclassificationtype/AcclassificationtypePage";
import { AcclassificationtypeEditPage } from "./Pages/Acclassificationtype/AcclassificationtypeEditPage";
import { AclessontypePage } from "./Pages/Aclessontype/AclessontypePage";
import { AclessontypeEditPage } from "./Pages/Aclessontype/AclessontypeEditPage";
import { AcprogramstudentstatePage } from "./Pages/Acprogramstudentstate/AcprogramstudentstatePage";
import { AcprogramstudentstateEditPage } from "./Pages/Acprogramstudentstate/AcprogramstudentstateEditPage";
import { AcprogramstudentPage } from "./Pages/Acprogramstudent/AcprogramstudentPage";
import { AcprogramstudentEditPage } from "./Pages/Acprogramstudent/AcprogramstudentEditPage";
import { AcprogrammessagePage } from "./Pages/Acprogrammessage/AcprogrammessagePage";
import { AcprogrammessageEditPage } from "./Pages/Acprogrammessage/AcprogrammessageEditPage";
import { PlanPage } from "./Pages/Plan/PlanPage";
import { PlanEditPage } from "./Pages/Plan/PlanEditPage";
import { PlannedlessonPage } from "./Pages/Plannedlesson/PlannedlessonPage";
import { PlannedlessonEditPage } from "./Pages/Plannedlesson/PlannedlessonEditPage";
import { FinancecategoryPage } from "./Pages/Financecategory/FinancecategoryPage";
import { FinancecategoryEditPage } from "./Pages/Financecategory/FinancecategoryEditPage";
import { FinancePage } from "./Pages/Finance/FinancePage";
import { FinanceEditPage } from "./Pages/Finance/FinanceEditPage";
import { FinancetypePage } from "./Pages/Financetype/FinancetypePage";
import { FinancetypeEditPage } from "./Pages/Financetype/FinancetypeEditPage";
import { MilestonePage } from "./Pages/Milestone/MilestonePage";
import { MilestoneEditPage } from "./Pages/Milestone/MilestoneEditPage";
import { ProjectcategoryPage } from "./Pages/Projectcategory/ProjectcategoryPage";
import { ProjectcategoryEditPage } from "./Pages/Projectcategory/ProjectcategoryEditPage";
import { ProjectPage } from "./Pages/Project/ProjectPage";
import { ProjectEditPage } from "./Pages/Project/ProjectEditPage";
import { ProjecttypePage } from "./Pages/Projecttype/ProjecttypePage";
import { ProjecttypeEditPage } from "./Pages/Projecttype/ProjecttypeEditPage";
import { StatementofworkPage } from "./Pages/Statementofwork/StatementofworkPage";
import { StatementofworkEditPage } from "./Pages/Statementofwork/StatementofworkEditPage";
import { PublicationPage } from "./Pages/Publication/PublicationPage";
import { PublicationEditPage } from "./Pages/Publication/PublicationEditPage";
import { PublicationtypePage } from "./Pages/Publicationtype/PublicationtypePage";
import { PublicationtypeEditPage } from "./Pages/Publicationtype/PublicationtypeEditPage";
import { AuthorPage } from "./Pages/Author/AuthorPage";
import { AuthorEditPage } from "./Pages/Author/AuthorEditPage";
import { SurveytypePage } from "./Pages/Surveytype/SurveytypePage";
import { SurveytypeEditPage } from "./Pages/Surveytype/SurveytypeEditPage";
import { SurveyPage } from "./Pages/Survey/SurveyPage";
import { SurveyEditPage } from "./Pages/Survey/SurveyEditPage";
import { AnswerPage } from "./Pages/Answer/AnswerPage";
import { AnswerEditPage } from "./Pages/Answer/AnswerEditPage";
import { QuestionPage } from "./Pages/Question/QuestionPage";
import { QuestionEditPage } from "./Pages/Question/QuestionEditPage";
import { QuestiontypePage } from "./Pages/Questiontype/QuestiontypePage";
import { QuestiontypeEditPage } from "./Pages/Questiontype/QuestiontypeEditPage";
import { UserPage } from "./Pages/User/UserPage";
import { UserEditPage } from "./Pages/User/UserEditPage";
import { GroupPage } from "./Pages/Group/GroupPage";
import { GroupEditPage } from "./Pages/Group/GroupEditPage";
import { RoletypePage } from "./Pages/Roletype/RoletypePage";
import { RoletypeEditPage } from "./Pages/Roletype/RoletypeEditPage";
import { RolecategoryPage } from "./Pages/Rolecategory/RolecategoryPage";
import { RolecategoryEditPage } from "./Pages/Rolecategory/RolecategoryEditPage";
import { GrouptypePage } from "./Pages/Grouptype/GrouptypePage";
import { GrouptypeEditPage } from "./Pages/Grouptype/GrouptypeEditPage";
import { GroupcategoryPage } from "./Pages/Groupcategory/GroupcategoryPage";
import { GroupcategoryEditPage } from "./Pages/Groupcategory/GroupcategoryEditPage";
import { RolePage } from "./Pages/Role/RolePage";
import { RoleEditPage } from "./Pages/Role/RoleEditPage";
import { RbacPage } from "./Pages/Rbac/RbacPage";
import { RbacEditPage } from "./Pages/Rbac/RbacEditPage";
import { MembershipPage } from "./Pages/Membership/MembershipPage";
import { MembershipEditPage } from "./Pages/Membership/MembershipEditPage";
import { RoletypelistPage } from "./Pages/Roletypelist/RoletypelistPage";
import { RoletypelistEditPage } from "./Pages/Roletypelist/RoletypelistEditPage";
import { StatePage } from "./Pages/State/StatePage";
import { StateEditPage } from "./Pages/State/StateEditPage";
import { StatemachinePage } from "./Pages/Statemachine/StatemachinePage";
import { StatemachineEditPage } from "./Pages/Statemachine/StatemachineEditPage";
import { StatetransitionPage } from "./Pages/Statetransition/StatetransitionPage";
import { StatetransitionEditPage } from "./Pages/Statetransition/StatetransitionEditPage";

import {
  EventGroupsCardPage,
  EventUsersCardPage,
  EventPresencesCardPage,
  EventSubeventsCardPage,
  EventExternalidsCardPage,
} from "./Pages/Event/EventCardPages";
import {
} from "./Pages/Eventpresence/EventpresenceCardPages";
import {
} from "./Pages/Eventtype/EventtypeCardPages";
import {
} from "./Pages/Eventpresencetype/EventpresencetypeCardPages";
import {
} from "./Pages/Eventinvitationtype/EventinvitationtypeCardPages";
import {
} from "./Pages/Externalidtype/ExternalidtypeCardPages";
import {
  FacilityExternalidsCardPage,
  FacilitySubfacilitiesCardPage,
  FacilityPlannedlessonsCardPage,
} from "./Pages/Facility/FacilityCardPages";
import {
} from "./Pages/Facilitytype/FacilitytypeCardPages";
import {
  RequestHistoriesCardPage,
} from "./Pages/Request/RequestCardPages";
import {
} from "./Pages/Formhistory/FormhistoryCardPages";
import {
  FormSectionsCardPage,
} from "./Pages/Form/FormCardPages";
import {
  FormtypeFormsCardPage,
} from "./Pages/Formtype/FormtypeCardPages";
import {
  FormcategoryFormtypesCardPage,
} from "./Pages/Formcategory/FormcategoryCardPages";
import {
  FormsectionPartsCardPage,
} from "./Pages/Formsection/FormsectionCardPages";
import {
  FormpartItemsCardPage,
} from "./Pages/Formpart/FormpartCardPages";
import {
} from "./Pages/Formitem/FormitemCardPages";
import {
} from "./Pages/Formitemtype/FormitemtypeCardPages";
import {
  FormitemcategoryTypesCardPage,
} from "./Pages/Formitemcategory/FormitemcategoryCardPages";
import {
  AcprogramSubjectsCardPage,
  AcprogramStudentsCardPage,
} from "./Pages/Acprogram/AcprogramCardPages";
import {
} from "./Pages/Acprogramtype/AcprogramtypeCardPages";
import {
} from "./Pages/Acprogramtitletype/AcprogramtitletypeCardPages";
import {
} from "./Pages/Acprogramlanguagetype/AcprogramlanguagetypeCardPages";
import {
} from "./Pages/Acprogramleveltype/AcprogramleveltypeCardPages";
import {
} from "./Pages/Acprogramformtype/AcprogramformtypeCardPages";
import {
  AcsubjectSemestersCardPage,
  AcsubjectPublicationCardPage,
} from "./Pages/Acsubject/AcsubjectCardPages";
import {
  AcsemesterClassificationsCardPage,
  AcsemesterTopicsCardPage,
  AcsemesterPlansCardPage,
} from "./Pages/Acsemester/AcsemesterCardPages";
import {
  ActopicLessonsCardPage,
} from "./Pages/Actopic/ActopicCardPages";
import {
} from "./Pages/Aclesson/AclessonCardPages";
import {
} from "./Pages/Acclassification/AcclassificationCardPages";
import {
} from "./Pages/Acclassificationlevel/AcclassificationlevelCardPages";
import {
} from "./Pages/Acclassificationtype/AcclassificationtypeCardPages";
import {
} from "./Pages/Aclessontype/AclessontypeCardPages";
import {
} from "./Pages/Acprogramstudentstate/AcprogramstudentstateCardPages";
import {
  AcprogramstudentMessagesCardPage,
} from "./Pages/Acprogramstudent/AcprogramstudentCardPages";
import {
} from "./Pages/Acprogrammessage/AcprogrammessageCardPages";
import {
  PlanLessonsCardPage,
} from "./Pages/Plan/PlanCardPages";
import {
  PlannedlessonLinkedwithCardPage,
  PlannedlessonUsersCardPage,
  PlannedlessonGroupsCardPage,
  PlannedlessonFacilitiesCardPage,
} from "./Pages/Plannedlesson/PlannedlessonCardPages";
import {
} from "./Pages/Financecategory/FinancecategoryCardPages";
import {
  FinanceFinancetypeCardPage,
} from "./Pages/Finance/FinanceCardPages";
import {
  FinancetypeFinancesCardPage,
} from "./Pages/Financetype/FinancetypeCardPages";
import {
  MilestonePreviousCardPage,
  MilestoneNextsCardPage,
} from "./Pages/Milestone/MilestoneCardPages";
import {
} from "./Pages/Projectcategory/ProjectcategoryCardPages";
import {
  ProjectFinancesCardPage,
  ProjectMilestonesCardPage,
} from "./Pages/Project/ProjectCardPages";
import {
  ProjecttypeProjectsCardPage,
} from "./Pages/Projecttype/ProjecttypeCardPages";
import {
} from "./Pages/Statementofwork/StatementofworkCardPages";
import {
  PublicationAuthorsCardPage,
  PublicationSubjectsCardPage,
} from "./Pages/Publication/PublicationCardPages";
import {
  PublicationtypePublicationsCardPage,
} from "./Pages/Publicationtype/PublicationtypeCardPages";
import {
} from "./Pages/Author/AuthorCardPages";
import {
} from "./Pages/Surveytype/SurveytypeCardPages";
import {
  SurveyQuestionsCardPage,
} from "./Pages/Survey/SurveyCardPages";
import {
} from "./Pages/Answer/AnswerCardPages";
import {
  QuestionAnswersCardPage,
  QuestionValuesCardPage,
} from "./Pages/Question/QuestionCardPages";
import {
} from "./Pages/Questiontype/QuestiontypeCardPages";
import {
  UserEventsCardPage,
  UserPresencesCardPage,
  UserExternalidsCardPage,
  UserRequestsCardPage,
  UserStudiesCardPage,
  UserClassificationsCardPage,
  UserPlannedlessonsCardPage,
  UserAuthorpublicationsCardPage,
  UserAnswersCardPage,
  UserRolesonCardPage,
  UserMembershipsCardPage,
  UserMembershipCardPage,
  UserRolesCardPage,
  UserMemberofCardPage,
} from "./Pages/User/UserCardPages";
import {
  GroupEventsCardPage,
  GroupExternalidsCardPage,
  GroupPlannedlessonsCardPage,
  GroupSubgroupsCardPage,
  GroupMembershipsCardPage,
  GroupRolesCardPage,
} from "./Pages/Group/GroupCardPages";
import {
} from "./Pages/Roletype/RoletypeCardPages";
import {
  RolecategoryRoletypesCardPage,
} from "./Pages/Rolecategory/RolecategoryCardPages";
import {
} from "./Pages/Grouptype/GrouptypeCardPages";
import {
  GroupcategoryTypesCardPage,
} from "./Pages/Groupcategory/GroupcategoryCardPages";
import {
} from "./Pages/Role/RoleCardPages";
import {
  RbacRolesCardPage,
} from "./Pages/Rbac/RbacCardPages";
import {
} from "./Pages/Membership/MembershipCardPages";
import {
  RoletypelistRoletypesCardPage,
} from "./Pages/Roletypelist/RoletypelistCardPages";
import {
  StateRequestsCardPage,
  StateSourcesCardPage,
  StateTargetsCardPage,
  StateRoletypesCardPage,
} from "./Pages/State/StateCardPages";
import {
  StatemachineStatesCardPage,
  StatemachineTransitionsCardPage,
} from "./Pages/Statemachine/StatemachineCardPages";
import {
} from "./Pages/Statetransition/StatetransitionCardPages";


export const Routes = [

  { "path": "/all/event/view/:id", "element": <EventPage /> },
  { "path": "/all/event/edit/:id", "element": <EventEditPage /> },
  { "path": "/all/event/groups/:id", "element": <EventGroupsCardPage /> },
  { "path": "/all/event/users/:id", "element": <EventUsersCardPage /> },
  { "path": "/all/event/presences/:id", "element": <EventPresencesCardPage /> },
  { "path": "/all/event/subevents/:id", "element": <EventSubeventsCardPage /> },
  { "path": "/all/event/externalids/:id", "element": <EventExternalidsCardPage /> },

  { "path": "/all/eventpresence/view/:id", "element": <EventpresencePage /> },
  { "path": "/all/eventpresence/edit/:id", "element": <EventpresenceEditPage /> },

  { "path": "/all/eventtype/view/:id", "element": <EventtypePage /> },
  { "path": "/all/eventtype/edit/:id", "element": <EventtypeEditPage /> },

  { "path": "/all/eventpresencetype/view/:id", "element": <EventpresencetypePage /> },
  { "path": "/all/eventpresencetype/edit/:id", "element": <EventpresencetypeEditPage /> },

  { "path": "/all/eventinvitationtype/view/:id", "element": <EventinvitationtypePage /> },
  { "path": "/all/eventinvitationtype/edit/:id", "element": <EventinvitationtypeEditPage /> },

  { "path": "/all/externalidtype/view/:id", "element": <ExternalidtypePage /> },
  { "path": "/all/externalidtype/edit/:id", "element": <ExternalidtypeEditPage /> },

  { "path": "/all/facility/view/:id", "element": <FacilityPage /> },
  { "path": "/all/facility/edit/:id", "element": <FacilityEditPage /> },
  { "path": "/all/facility/externalids/:id", "element": <FacilityExternalidsCardPage /> },
  { "path": "/all/facility/subfacilities/:id", "element": <FacilitySubfacilitiesCardPage /> },
  { "path": "/all/facility/plannedlessons/:id", "element": <FacilityPlannedlessonsCardPage /> },

  { "path": "/all/facilitytype/view/:id", "element": <FacilitytypePage /> },
  { "path": "/all/facilitytype/edit/:id", "element": <FacilitytypeEditPage /> },

  { "path": "/all/request/view/:id", "element": <RequestPage /> },
  { "path": "/all/request/edit/:id", "element": <RequestEditPage /> },
  { "path": "/all/request/histories/:id", "element": <RequestHistoriesCardPage /> },

  { "path": "/all/formhistory/view/:id", "element": <FormhistoryPage /> },
  { "path": "/all/formhistory/edit/:id", "element": <FormhistoryEditPage /> },

  { "path": "/all/form/view/:id", "element": <FormPage /> },
  { "path": "/all/form/edit/:id", "element": <FormEditPage /> },
  { "path": "/all/form/sections/:id", "element": <FormSectionsCardPage /> },

  { "path": "/all/formtype/view/:id", "element": <FormtypePage /> },
  { "path": "/all/formtype/edit/:id", "element": <FormtypeEditPage /> },
  { "path": "/all/formtype/forms/:id", "element": <FormtypeFormsCardPage /> },

  { "path": "/all/formcategory/view/:id", "element": <FormcategoryPage /> },
  { "path": "/all/formcategory/edit/:id", "element": <FormcategoryEditPage /> },
  { "path": "/all/formcategory/formtypes/:id", "element": <FormcategoryFormtypesCardPage /> },

  { "path": "/all/formsection/view/:id", "element": <FormsectionPage /> },
  { "path": "/all/formsection/edit/:id", "element": <FormsectionEditPage /> },
  { "path": "/all/formsection/parts/:id", "element": <FormsectionPartsCardPage /> },

  { "path": "/all/formpart/view/:id", "element": <FormpartPage /> },
  { "path": "/all/formpart/edit/:id", "element": <FormpartEditPage /> },
  { "path": "/all/formpart/items/:id", "element": <FormpartItemsCardPage /> },

  { "path": "/all/formitem/view/:id", "element": <FormitemPage /> },
  { "path": "/all/formitem/edit/:id", "element": <FormitemEditPage /> },

  { "path": "/all/formitemtype/view/:id", "element": <FormitemtypePage /> },
  { "path": "/all/formitemtype/edit/:id", "element": <FormitemtypeEditPage /> },

  { "path": "/all/formitemcategory/view/:id", "element": <FormitemcategoryPage /> },
  { "path": "/all/formitemcategory/edit/:id", "element": <FormitemcategoryEditPage /> },
  { "path": "/all/formitemcategory/types/:id", "element": <FormitemcategoryTypesCardPage /> },

  { "path": "/all/acprogram/view/:id", "element": <AcprogramPage /> },
  { "path": "/all/acprogram/edit/:id", "element": <AcprogramEditPage /> },
  { "path": "/all/acprogram/subjects/:id", "element": <AcprogramSubjectsCardPage /> },
  { "path": "/all/acprogram/students/:id", "element": <AcprogramStudentsCardPage /> },

  { "path": "/all/acprogramtype/view/:id", "element": <AcprogramtypePage /> },
  { "path": "/all/acprogramtype/edit/:id", "element": <AcprogramtypeEditPage /> },

  { "path": "/all/acprogramtitletype/view/:id", "element": <AcprogramtitletypePage /> },
  { "path": "/all/acprogramtitletype/edit/:id", "element": <AcprogramtitletypeEditPage /> },

  { "path": "/all/acprogramlanguagetype/view/:id", "element": <AcprogramlanguagetypePage /> },
  { "path": "/all/acprogramlanguagetype/edit/:id", "element": <AcprogramlanguagetypeEditPage /> },

  { "path": "/all/acprogramleveltype/view/:id", "element": <AcprogramleveltypePage /> },
  { "path": "/all/acprogramleveltype/edit/:id", "element": <AcprogramleveltypeEditPage /> },

  { "path": "/all/acprogramformtype/view/:id", "element": <AcprogramformtypePage /> },
  { "path": "/all/acprogramformtype/edit/:id", "element": <AcprogramformtypeEditPage /> },

  { "path": "/all/acsubject/view/:id", "element": <AcsubjectPage /> },
  { "path": "/all/acsubject/edit/:id", "element": <AcsubjectEditPage /> },
  { "path": "/all/acsubject/semesters/:id", "element": <AcsubjectSemestersCardPage /> },
  { "path": "/all/acsubject/publication/:id", "element": <AcsubjectPublicationCardPage /> },

  { "path": "/all/acsemester/view/:id", "element": <AcsemesterPage /> },
  { "path": "/all/acsemester/edit/:id", "element": <AcsemesterEditPage /> },
  { "path": "/all/acsemester/classifications/:id", "element": <AcsemesterClassificationsCardPage /> },
  { "path": "/all/acsemester/topics/:id", "element": <AcsemesterTopicsCardPage /> },
  { "path": "/all/acsemester/plans/:id", "element": <AcsemesterPlansCardPage /> },

  { "path": "/all/actopic/view/:id", "element": <ActopicPage /> },
  { "path": "/all/actopic/edit/:id", "element": <ActopicEditPage /> },
  { "path": "/all/actopic/lessons/:id", "element": <ActopicLessonsCardPage /> },

  { "path": "/all/aclesson/view/:id", "element": <AclessonPage /> },
  { "path": "/all/aclesson/edit/:id", "element": <AclessonEditPage /> },

  { "path": "/all/acclassification/view/:id", "element": <AcclassificationPage /> },
  { "path": "/all/acclassification/edit/:id", "element": <AcclassificationEditPage /> },

  { "path": "/all/acclassificationlevel/view/:id", "element": <AcclassificationlevelPage /> },
  { "path": "/all/acclassificationlevel/edit/:id", "element": <AcclassificationlevelEditPage /> },

  { "path": "/all/acclassificationtype/view/:id", "element": <AcclassificationtypePage /> },
  { "path": "/all/acclassificationtype/edit/:id", "element": <AcclassificationtypeEditPage /> },

  { "path": "/all/aclessontype/view/:id", "element": <AclessontypePage /> },
  { "path": "/all/aclessontype/edit/:id", "element": <AclessontypeEditPage /> },

  { "path": "/all/acprogramstudentstate/view/:id", "element": <AcprogramstudentstatePage /> },
  { "path": "/all/acprogramstudentstate/edit/:id", "element": <AcprogramstudentstateEditPage /> },

  { "path": "/all/acprogramstudent/view/:id", "element": <AcprogramstudentPage /> },
  { "path": "/all/acprogramstudent/edit/:id", "element": <AcprogramstudentEditPage /> },
  { "path": "/all/acprogramstudent/messages/:id", "element": <AcprogramstudentMessagesCardPage /> },

  { "path": "/all/acprogrammessage/view/:id", "element": <AcprogrammessagePage /> },
  { "path": "/all/acprogrammessage/edit/:id", "element": <AcprogrammessageEditPage /> },

  { "path": "/all/plan/view/:id", "element": <PlanPage /> },
  { "path": "/all/plan/edit/:id", "element": <PlanEditPage /> },
  { "path": "/all/plan/lessons/:id", "element": <PlanLessonsCardPage /> },

  { "path": "/all/plannedlesson/view/:id", "element": <PlannedlessonPage /> },
  { "path": "/all/plannedlesson/edit/:id", "element": <PlannedlessonEditPage /> },
  { "path": "/all/plannedlesson/linkedwith/:id", "element": <PlannedlessonLinkedwithCardPage /> },
  { "path": "/all/plannedlesson/users/:id", "element": <PlannedlessonUsersCardPage /> },
  { "path": "/all/plannedlesson/groups/:id", "element": <PlannedlessonGroupsCardPage /> },
  { "path": "/all/plannedlesson/facilities/:id", "element": <PlannedlessonFacilitiesCardPage /> },

  { "path": "/all/financecategory/view/:id", "element": <FinancecategoryPage /> },
  { "path": "/all/financecategory/edit/:id", "element": <FinancecategoryEditPage /> },

  { "path": "/all/finance/view/:id", "element": <FinancePage /> },
  { "path": "/all/finance/edit/:id", "element": <FinanceEditPage /> },
  { "path": "/all/finance/financetype/:id", "element": <FinanceFinancetypeCardPage /> },

  { "path": "/all/financetype/view/:id", "element": <FinancetypePage /> },
  { "path": "/all/financetype/edit/:id", "element": <FinancetypeEditPage /> },
  { "path": "/all/financetype/finances/:id", "element": <FinancetypeFinancesCardPage /> },

  { "path": "/all/milestone/view/:id", "element": <MilestonePage /> },
  { "path": "/all/milestone/edit/:id", "element": <MilestoneEditPage /> },
  { "path": "/all/milestone/previous/:id", "element": <MilestonePreviousCardPage /> },
  { "path": "/all/milestone/nexts/:id", "element": <MilestoneNextsCardPage /> },

  { "path": "/all/projectcategory/view/:id", "element": <ProjectcategoryPage /> },
  { "path": "/all/projectcategory/edit/:id", "element": <ProjectcategoryEditPage /> },

  { "path": "/all/project/view/:id", "element": <ProjectPage /> },
  { "path": "/all/project/edit/:id", "element": <ProjectEditPage /> },
  { "path": "/all/project/finances/:id", "element": <ProjectFinancesCardPage /> },
  { "path": "/all/project/milestones/:id", "element": <ProjectMilestonesCardPage /> },

  { "path": "/all/projecttype/view/:id", "element": <ProjecttypePage /> },
  { "path": "/all/projecttype/edit/:id", "element": <ProjecttypeEditPage /> },
  { "path": "/all/projecttype/projects/:id", "element": <ProjecttypeProjectsCardPage /> },

  { "path": "/all/statementofwork/view/:id", "element": <StatementofworkPage /> },
  { "path": "/all/statementofwork/edit/:id", "element": <StatementofworkEditPage /> },

  { "path": "/all/publication/view/:id", "element": <PublicationPage /> },
  { "path": "/all/publication/edit/:id", "element": <PublicationEditPage /> },
  { "path": "/all/publication/authors/:id", "element": <PublicationAuthorsCardPage /> },
  { "path": "/all/publication/subjects/:id", "element": <PublicationSubjectsCardPage /> },

  { "path": "/all/publicationtype/view/:id", "element": <PublicationtypePage /> },
  { "path": "/all/publicationtype/edit/:id", "element": <PublicationtypeEditPage /> },
  { "path": "/all/publicationtype/publications/:id", "element": <PublicationtypePublicationsCardPage /> },

  { "path": "/all/author/view/:id", "element": <AuthorPage /> },
  { "path": "/all/author/edit/:id", "element": <AuthorEditPage /> },

  { "path": "/all/surveytype/view/:id", "element": <SurveytypePage /> },
  { "path": "/all/surveytype/edit/:id", "element": <SurveytypeEditPage /> },

  { "path": "/all/survey/view/:id", "element": <SurveyPage /> },
  { "path": "/all/survey/edit/:id", "element": <SurveyEditPage /> },
  { "path": "/all/survey/questions/:id", "element": <SurveyQuestionsCardPage /> },

  { "path": "/all/answer/view/:id", "element": <AnswerPage /> },
  { "path": "/all/answer/edit/:id", "element": <AnswerEditPage /> },

  { "path": "/all/question/view/:id", "element": <QuestionPage /> },
  { "path": "/all/question/edit/:id", "element": <QuestionEditPage /> },
  { "path": "/all/question/answers/:id", "element": <QuestionAnswersCardPage /> },
  { "path": "/all/question/values/:id", "element": <QuestionValuesCardPage /> },

  { "path": "/all/questiontype/view/:id", "element": <QuestiontypePage /> },
  { "path": "/all/questiontype/edit/:id", "element": <QuestiontypeEditPage /> },

  { "path": "/all/user/view/:id", "element": <UserPage /> },
  { "path": "/all/user/edit/:id", "element": <UserEditPage /> },
  { "path": "/all/user/events/:id", "element": <UserEventsCardPage /> },
  { "path": "/all/user/presences/:id", "element": <UserPresencesCardPage /> },
  { "path": "/all/user/externalids/:id", "element": <UserExternalidsCardPage /> },
  { "path": "/all/user/requests/:id", "element": <UserRequestsCardPage /> },
  { "path": "/all/user/studies/:id", "element": <UserStudiesCardPage /> },
  { "path": "/all/user/classifications/:id", "element": <UserClassificationsCardPage /> },
  { "path": "/all/user/plannedlessons/:id", "element": <UserPlannedlessonsCardPage /> },
  { "path": "/all/user/authorpublications/:id", "element": <UserAuthorpublicationsCardPage /> },
  { "path": "/all/user/answers/:id", "element": <UserAnswersCardPage /> },
  { "path": "/all/user/roleson/:id", "element": <UserRolesonCardPage /> },
  { "path": "/all/user/memberships/:id", "element": <UserMembershipsCardPage /> },
  { "path": "/all/user/membership/:id", "element": <UserMembershipCardPage /> },
  { "path": "/all/user/roles/:id", "element": <UserRolesCardPage /> },
  { "path": "/all/user/memberof/:id", "element": <UserMemberofCardPage /> },

  { "path": "/all/group/view/:id", "element": <GroupPage /> },
  { "path": "/all/group/edit/:id", "element": <GroupEditPage /> },
  { "path": "/all/group/events/:id", "element": <GroupEventsCardPage /> },
  { "path": "/all/group/externalids/:id", "element": <GroupExternalidsCardPage /> },
  { "path": "/all/group/plannedlessons/:id", "element": <GroupPlannedlessonsCardPage /> },
  { "path": "/all/group/subgroups/:id", "element": <GroupSubgroupsCardPage /> },
  { "path": "/all/group/memberships/:id", "element": <GroupMembershipsCardPage /> },
  { "path": "/all/group/roles/:id", "element": <GroupRolesCardPage /> },

  { "path": "/all/roletype/view/:id", "element": <RoletypePage /> },
  { "path": "/all/roletype/edit/:id", "element": <RoletypeEditPage /> },

  { "path": "/all/rolecategory/view/:id", "element": <RolecategoryPage /> },
  { "path": "/all/rolecategory/edit/:id", "element": <RolecategoryEditPage /> },
  { "path": "/all/rolecategory/roletypes/:id", "element": <RolecategoryRoletypesCardPage /> },

  { "path": "/all/grouptype/view/:id", "element": <GrouptypePage /> },
  { "path": "/all/grouptype/edit/:id", "element": <GrouptypeEditPage /> },

  { "path": "/all/groupcategory/view/:id", "element": <GroupcategoryPage /> },
  { "path": "/all/groupcategory/edit/:id", "element": <GroupcategoryEditPage /> },
  { "path": "/all/groupcategory/types/:id", "element": <GroupcategoryTypesCardPage /> },

  { "path": "/all/role/view/:id", "element": <RolePage /> },
  { "path": "/all/role/edit/:id", "element": <RoleEditPage /> },

  { "path": "/all/rbac/view/:id", "element": <RbacPage /> },
  { "path": "/all/rbac/edit/:id", "element": <RbacEditPage /> },
  { "path": "/all/rbac/roles/:id", "element": <RbacRolesCardPage /> },

  { "path": "/all/membership/view/:id", "element": <MembershipPage /> },
  { "path": "/all/membership/edit/:id", "element": <MembershipEditPage /> },

  { "path": "/all/roletypelist/view/:id", "element": <RoletypelistPage /> },
  { "path": "/all/roletypelist/edit/:id", "element": <RoletypelistEditPage /> },
  { "path": "/all/roletypelist/roletypes/:id", "element": <RoletypelistRoletypesCardPage /> },

  { "path": "/all/state/view/:id", "element": <StatePage /> },
  { "path": "/all/state/edit/:id", "element": <StateEditPage /> },
  { "path": "/all/state/requests/:id", "element": <StateRequestsCardPage /> },
  { "path": "/all/state/sources/:id", "element": <StateSourcesCardPage /> },
  { "path": "/all/state/targets/:id", "element": <StateTargetsCardPage /> },
  { "path": "/all/state/roletypes/:id", "element": <StateRoletypesCardPage /> },

  { "path": "/all/statemachine/view/:id", "element": <StatemachinePage /> },
  { "path": "/all/statemachine/edit/:id", "element": <StatemachineEditPage /> },
  { "path": "/all/statemachine/states/:id", "element": <StatemachineStatesCardPage /> },
  { "path": "/all/statemachine/transitions/:id", "element": <StatemachineTransitionsCardPage /> },

  { "path": "/all/statetransition/view/:id", "element": <StatetransitionPage /> },
  { "path": "/all/statetransition/edit/:id", "element": <StatetransitionEditPage /> },
]
  
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = ({children}) => <RouterProvider router={router} >{children}</RouterProvider>
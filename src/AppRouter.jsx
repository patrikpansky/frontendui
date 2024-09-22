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
import { EventpresencePage } from "./Pages/Eventpresence/EventpresencePage";
import { EventtypePage } from "./Pages/Eventtype/EventtypePage";
import { EventpresencetypePage } from "./Pages/Eventpresencetype/EventpresencetypePage";
import { EventinvitationtypePage } from "./Pages/Eventinvitationtype/EventinvitationtypePage";
import { ExternalidtypePage } from "./Pages/Externalidtype/ExternalidtypePage";
import { FacilityPage } from "./Pages/Facility/FacilityPage";
import { FacilitytypePage } from "./Pages/Facilitytype/FacilitytypePage";
import { RequestPage } from "./Pages/Request/RequestPage";
import { FormhistoryPage } from "./Pages/Formhistory/FormhistoryPage";
import { FormPage } from "./Pages/Form/FormPage";
import { FormtypePage } from "./Pages/Formtype/FormtypePage";
import { FormcategoryPage } from "./Pages/Formcategory/FormcategoryPage";
import { FormsectionPage } from "./Pages/Formsection/FormsectionPage";
import { FormpartPage } from "./Pages/Formpart/FormpartPage";
import { FormitemPage } from "./Pages/Formitem/FormitemPage";
import { FormitemtypePage } from "./Pages/Formitemtype/FormitemtypePage";
import { FormitemcategoryPage } from "./Pages/Formitemcategory/FormitemcategoryPage";
import { AcprogramPage } from "./Pages/Acprogram/AcprogramPage";
import { AcprogramtypePage } from "./Pages/Acprogramtype/AcprogramtypePage";
import { AcprogramtitletypePage } from "./Pages/Acprogramtitletype/AcprogramtitletypePage";
import { AcprogramlanguagetypePage } from "./Pages/Acprogramlanguagetype/AcprogramlanguagetypePage";
import { AcprogramleveltypePage } from "./Pages/Acprogramleveltype/AcprogramleveltypePage";
import { AcprogramformtypePage } from "./Pages/Acprogramformtype/AcprogramformtypePage";
import { AcsubjectPage } from "./Pages/Acsubject/AcsubjectPage";
import { AcsemesterPage } from "./Pages/Acsemester/AcsemesterPage";
import { ActopicPage } from "./Pages/Actopic/ActopicPage";
import { AclessonPage } from "./Pages/Aclesson/AclessonPage";
import { AcclassificationPage } from "./Pages/Acclassification/AcclassificationPage";
import { AcclassificationlevelPage } from "./Pages/Acclassificationlevel/AcclassificationlevelPage";
import { AcclassificationtypePage } from "./Pages/Acclassificationtype/AcclassificationtypePage";
import { AclessontypePage } from "./Pages/Aclessontype/AclessontypePage";
import { AcprogramstudentstatePage } from "./Pages/Acprogramstudentstate/AcprogramstudentstatePage";
import { AcprogramstudentPage } from "./Pages/Acprogramstudent/AcprogramstudentPage";
import { AcprogrammessagePage } from "./Pages/Acprogrammessage/AcprogrammessagePage";
import { PlanPage } from "./Pages/Plan/PlanPage";
import { PlannedlessonPage } from "./Pages/Plannedlesson/PlannedlessonPage";
import { FinancecategoryPage } from "./Pages/Financecategory/FinancecategoryPage";
import { FinancePage } from "./Pages/Finance/FinancePage";
import { FinancetypePage } from "./Pages/Financetype/FinancetypePage";
import { MilestonePage } from "./Pages/Milestone/MilestonePage";
import { ProjectcategoryPage } from "./Pages/Projectcategory/ProjectcategoryPage";
import { ProjectPage } from "./Pages/Project/ProjectPage";
import { ProjecttypePage } from "./Pages/Projecttype/ProjecttypePage";
import { StatementofworkPage } from "./Pages/Statementofwork/StatementofworkPage";
import { PublicationPage } from "./Pages/Publication/PublicationPage";
import { PublicationtypePage } from "./Pages/Publicationtype/PublicationtypePage";
import { AuthorPage } from "./Pages/Author/AuthorPage";
import { SurveytypePage } from "./Pages/Surveytype/SurveytypePage";
import { SurveyPage } from "./Pages/Survey/SurveyPage";
import { AnswerPage } from "./Pages/Answer/AnswerPage";
import { QuestionPage } from "./Pages/Question/QuestionPage";
import { QuestiontypePage } from "./Pages/Questiontype/QuestiontypePage";
import { UserPage } from "./Pages/User/UserPage";
import { GroupPage } from "./Pages/Group/GroupPage";
import { RoletypePage } from "./Pages/Roletype/RoletypePage";
import { RolecategoryPage } from "./Pages/Rolecategory/RolecategoryPage";
import { GrouptypePage } from "./Pages/Grouptype/GrouptypePage";
import { GroupcategoryPage } from "./Pages/Groupcategory/GroupcategoryPage";
import { RolePage } from "./Pages/Role/RolePage";
import { RbacPage } from "./Pages/Rbac/RbacPage";
import { MembershipPage } from "./Pages/Membership/MembershipPage";
import { RoletypelistPage } from "./Pages/Roletypelist/RoletypelistPage";
import { StatePage } from "./Pages/State/StatePage";
import { StatemachinePage } from "./Pages/Statemachine/StatemachinePage";
import { StatetransitionPage } from "./Pages/Statetransition/StatetransitionPage";

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

  { "path": "/auto/event/view/:id", "element": <EventPage /> },
  { "path": "/auto/event/groups/:id", "element": <EventGroupsCardPage /> },
  { "path": "/auto/event/users/:id", "element": <EventUsersCardPage /> },
  { "path": "/auto/event/presences/:id", "element": <EventPresencesCardPage /> },
  { "path": "/auto/event/subevents/:id", "element": <EventSubeventsCardPage /> },
  { "path": "/auto/event/externalids/:id", "element": <EventExternalidsCardPage /> },

  { "path": "/auto/eventpresence/view/:id", "element": <EventpresencePage /> },

  { "path": "/auto/eventtype/view/:id", "element": <EventtypePage /> },

  { "path": "/auto/eventpresencetype/view/:id", "element": <EventpresencetypePage /> },

  { "path": "/auto/eventinvitationtype/view/:id", "element": <EventinvitationtypePage /> },

  { "path": "/auto/externalidtype/view/:id", "element": <ExternalidtypePage /> },

  { "path": "/auto/facility/view/:id", "element": <FacilityPage /> },
  { "path": "/auto/facility/externalids/:id", "element": <FacilityExternalidsCardPage /> },
  { "path": "/auto/facility/subfacilities/:id", "element": <FacilitySubfacilitiesCardPage /> },
  { "path": "/auto/facility/plannedlessons/:id", "element": <FacilityPlannedlessonsCardPage /> },

  { "path": "/auto/facilitytype/view/:id", "element": <FacilitytypePage /> },

  { "path": "/auto/request/view/:id", "element": <RequestPage /> },
  { "path": "/auto/request/histories/:id", "element": <RequestHistoriesCardPage /> },

  { "path": "/auto/formhistory/view/:id", "element": <FormhistoryPage /> },

  { "path": "/auto/form/view/:id", "element": <FormPage /> },
  { "path": "/auto/form/sections/:id", "element": <FormSectionsCardPage /> },

  { "path": "/auto/formtype/view/:id", "element": <FormtypePage /> },
  { "path": "/auto/formtype/forms/:id", "element": <FormtypeFormsCardPage /> },

  { "path": "/auto/formcategory/view/:id", "element": <FormcategoryPage /> },
  { "path": "/auto/formcategory/formtypes/:id", "element": <FormcategoryFormtypesCardPage /> },

  { "path": "/auto/formsection/view/:id", "element": <FormsectionPage /> },
  { "path": "/auto/formsection/parts/:id", "element": <FormsectionPartsCardPage /> },

  { "path": "/auto/formpart/view/:id", "element": <FormpartPage /> },
  { "path": "/auto/formpart/items/:id", "element": <FormpartItemsCardPage /> },

  { "path": "/auto/formitem/view/:id", "element": <FormitemPage /> },

  { "path": "/auto/formitemtype/view/:id", "element": <FormitemtypePage /> },

  { "path": "/auto/formitemcategory/view/:id", "element": <FormitemcategoryPage /> },
  { "path": "/auto/formitemcategory/types/:id", "element": <FormitemcategoryTypesCardPage /> },

  { "path": "/auto/acprogram/view/:id", "element": <AcprogramPage /> },
  { "path": "/auto/acprogram/subjects/:id", "element": <AcprogramSubjectsCardPage /> },
  { "path": "/auto/acprogram/students/:id", "element": <AcprogramStudentsCardPage /> },

  { "path": "/auto/acprogramtype/view/:id", "element": <AcprogramtypePage /> },

  { "path": "/auto/acprogramtitletype/view/:id", "element": <AcprogramtitletypePage /> },

  { "path": "/auto/acprogramlanguagetype/view/:id", "element": <AcprogramlanguagetypePage /> },

  { "path": "/auto/acprogramleveltype/view/:id", "element": <AcprogramleveltypePage /> },

  { "path": "/auto/acprogramformtype/view/:id", "element": <AcprogramformtypePage /> },

  { "path": "/auto/acsubject/view/:id", "element": <AcsubjectPage /> },
  { "path": "/auto/acsubject/semesters/:id", "element": <AcsubjectSemestersCardPage /> },
  { "path": "/auto/acsubject/publication/:id", "element": <AcsubjectPublicationCardPage /> },

  { "path": "/auto/acsemester/view/:id", "element": <AcsemesterPage /> },
  { "path": "/auto/acsemester/classifications/:id", "element": <AcsemesterClassificationsCardPage /> },
  { "path": "/auto/acsemester/topics/:id", "element": <AcsemesterTopicsCardPage /> },
  { "path": "/auto/acsemester/plans/:id", "element": <AcsemesterPlansCardPage /> },

  { "path": "/auto/actopic/view/:id", "element": <ActopicPage /> },
  { "path": "/auto/actopic/lessons/:id", "element": <ActopicLessonsCardPage /> },

  { "path": "/auto/aclesson/view/:id", "element": <AclessonPage /> },

  { "path": "/auto/acclassification/view/:id", "element": <AcclassificationPage /> },

  { "path": "/auto/acclassificationlevel/view/:id", "element": <AcclassificationlevelPage /> },

  { "path": "/auto/acclassificationtype/view/:id", "element": <AcclassificationtypePage /> },

  { "path": "/auto/aclessontype/view/:id", "element": <AclessontypePage /> },

  { "path": "/auto/acprogramstudentstate/view/:id", "element": <AcprogramstudentstatePage /> },

  { "path": "/auto/acprogramstudent/view/:id", "element": <AcprogramstudentPage /> },
  { "path": "/auto/acprogramstudent/messages/:id", "element": <AcprogramstudentMessagesCardPage /> },

  { "path": "/auto/acprogrammessage/view/:id", "element": <AcprogrammessagePage /> },

  { "path": "/auto/plan/view/:id", "element": <PlanPage /> },
  { "path": "/auto/plan/lessons/:id", "element": <PlanLessonsCardPage /> },

  { "path": "/auto/plannedlesson/view/:id", "element": <PlannedlessonPage /> },
  { "path": "/auto/plannedlesson/linkedwith/:id", "element": <PlannedlessonLinkedwithCardPage /> },
  { "path": "/auto/plannedlesson/users/:id", "element": <PlannedlessonUsersCardPage /> },
  { "path": "/auto/plannedlesson/groups/:id", "element": <PlannedlessonGroupsCardPage /> },
  { "path": "/auto/plannedlesson/facilities/:id", "element": <PlannedlessonFacilitiesCardPage /> },

  { "path": "/auto/financecategory/view/:id", "element": <FinancecategoryPage /> },

  { "path": "/auto/finance/view/:id", "element": <FinancePage /> },
  { "path": "/auto/finance/financetype/:id", "element": <FinanceFinancetypeCardPage /> },

  { "path": "/auto/financetype/view/:id", "element": <FinancetypePage /> },
  { "path": "/auto/financetype/finances/:id", "element": <FinancetypeFinancesCardPage /> },

  { "path": "/auto/milestone/view/:id", "element": <MilestonePage /> },
  { "path": "/auto/milestone/previous/:id", "element": <MilestonePreviousCardPage /> },
  { "path": "/auto/milestone/nexts/:id", "element": <MilestoneNextsCardPage /> },

  { "path": "/auto/projectcategory/view/:id", "element": <ProjectcategoryPage /> },

  { "path": "/auto/project/view/:id", "element": <ProjectPage /> },
  { "path": "/auto/project/finances/:id", "element": <ProjectFinancesCardPage /> },
  { "path": "/auto/project/milestones/:id", "element": <ProjectMilestonesCardPage /> },

  { "path": "/auto/projecttype/view/:id", "element": <ProjecttypePage /> },
  { "path": "/auto/projecttype/projects/:id", "element": <ProjecttypeProjectsCardPage /> },

  { "path": "/auto/statementofwork/view/:id", "element": <StatementofworkPage /> },

  { "path": "/auto/publication/view/:id", "element": <PublicationPage /> },
  { "path": "/auto/publication/authors/:id", "element": <PublicationAuthorsCardPage /> },
  { "path": "/auto/publication/subjects/:id", "element": <PublicationSubjectsCardPage /> },

  { "path": "/auto/publicationtype/view/:id", "element": <PublicationtypePage /> },
  { "path": "/auto/publicationtype/publications/:id", "element": <PublicationtypePublicationsCardPage /> },

  { "path": "/auto/author/view/:id", "element": <AuthorPage /> },

  { "path": "/auto/surveytype/view/:id", "element": <SurveytypePage /> },

  { "path": "/auto/survey/view/:id", "element": <SurveyPage /> },
  { "path": "/auto/survey/questions/:id", "element": <SurveyQuestionsCardPage /> },

  { "path": "/auto/answer/view/:id", "element": <AnswerPage /> },

  { "path": "/auto/question/view/:id", "element": <QuestionPage /> },
  { "path": "/auto/question/answers/:id", "element": <QuestionAnswersCardPage /> },
  { "path": "/auto/question/values/:id", "element": <QuestionValuesCardPage /> },

  { "path": "/auto/questiontype/view/:id", "element": <QuestiontypePage /> },

  { "path": "/auto/user/view/:id", "element": <UserPage /> },
  { "path": "/auto/user/events/:id", "element": <UserEventsCardPage /> },
  { "path": "/auto/user/presences/:id", "element": <UserPresencesCardPage /> },
  { "path": "/auto/user/externalids/:id", "element": <UserExternalidsCardPage /> },
  { "path": "/auto/user/requests/:id", "element": <UserRequestsCardPage /> },
  { "path": "/auto/user/studies/:id", "element": <UserStudiesCardPage /> },
  { "path": "/auto/user/classifications/:id", "element": <UserClassificationsCardPage /> },
  { "path": "/auto/user/plannedlessons/:id", "element": <UserPlannedlessonsCardPage /> },
  { "path": "/auto/user/authorpublications/:id", "element": <UserAuthorpublicationsCardPage /> },
  { "path": "/auto/user/answers/:id", "element": <UserAnswersCardPage /> },
  { "path": "/auto/user/roleson/:id", "element": <UserRolesonCardPage /> },
  { "path": "/auto/user/memberships/:id", "element": <UserMembershipsCardPage /> },
  { "path": "/auto/user/membership/:id", "element": <UserMembershipCardPage /> },
  { "path": "/auto/user/roles/:id", "element": <UserRolesCardPage /> },
  { "path": "/auto/user/memberof/:id", "element": <UserMemberofCardPage /> },

  { "path": "/auto/group/view/:id", "element": <GroupPage /> },
  { "path": "/auto/group/events/:id", "element": <GroupEventsCardPage /> },
  { "path": "/auto/group/externalids/:id", "element": <GroupExternalidsCardPage /> },
  { "path": "/auto/group/plannedlessons/:id", "element": <GroupPlannedlessonsCardPage /> },
  { "path": "/auto/group/subgroups/:id", "element": <GroupSubgroupsCardPage /> },
  { "path": "/auto/group/memberships/:id", "element": <GroupMembershipsCardPage /> },
  { "path": "/auto/group/roles/:id", "element": <GroupRolesCardPage /> },

  { "path": "/auto/roletype/view/:id", "element": <RoletypePage /> },

  { "path": "/auto/rolecategory/view/:id", "element": <RolecategoryPage /> },
  { "path": "/auto/rolecategory/roletypes/:id", "element": <RolecategoryRoletypesCardPage /> },

  { "path": "/auto/grouptype/view/:id", "element": <GrouptypePage /> },

  { "path": "/auto/groupcategory/view/:id", "element": <GroupcategoryPage /> },
  { "path": "/auto/groupcategory/types/:id", "element": <GroupcategoryTypesCardPage /> },

  { "path": "/auto/role/view/:id", "element": <RolePage /> },

  { "path": "/auto/rbac/view/:id", "element": <RbacPage /> },
  { "path": "/auto/rbac/roles/:id", "element": <RbacRolesCardPage /> },

  { "path": "/auto/membership/view/:id", "element": <MembershipPage /> },

  { "path": "/auto/roletypelist/view/:id", "element": <RoletypelistPage /> },
  { "path": "/auto/roletypelist/roletypes/:id", "element": <RoletypelistRoletypesCardPage /> },

  { "path": "/auto/state/view/:id", "element": <StatePage /> },
  { "path": "/auto/state/requests/:id", "element": <StateRequestsCardPage /> },
  { "path": "/auto/state/sources/:id", "element": <StateSourcesCardPage /> },
  { "path": "/auto/state/targets/:id", "element": <StateTargetsCardPage /> },
  { "path": "/auto/state/roletypes/:id", "element": <StateRoletypesCardPage /> },

  { "path": "/auto/statemachine/view/:id", "element": <StatemachinePage /> },
  { "path": "/auto/statemachine/states/:id", "element": <StatemachineStatesCardPage /> },
  { "path": "/auto/statemachine/transitions/:id", "element": <StatemachineTransitionsCardPage /> },

  { "path": "/auto/statetransition/view/:id", "element": <StatetransitionPage /> },
]
  
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = ({children}) => <RouterProvider router={router} >{children}</RouterProvider>